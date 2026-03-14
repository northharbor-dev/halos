# HALOS — validation, build, and serve for spec + GitHub Pages
#
# Build:  docker build -t halos .
#
# Bundled (no mount): docker run --rm halos serve
#                     docker run --rm halos info
#
# Mounted (dev):      docker run --rm -v $(pwd):/workspace halos validate
#                     docker run --rm -v $(pwd):/workspace -p 3000:3000 halos serve
#
# Multi-platform: docker buildx build --platform linux/amd64,linux/arm64 -t halos .
FROM ruby:3.2-slim

# Node for validation (ajv-cli, generate-spec.js)
RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    ca-certificates \
    build-essential \
    python3 \
    && curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y --no-install-recommends nodejs \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /workspace

# Install ajv-cli for JSON Schema validation
RUN npm install -g ajv-cli@5

# Install Jekyll and gems (used for docs build)
COPY docs/Gemfile /jekyll/
WORKDIR /jekyll
RUN bundle config set --local path 'vendor/bundle' \
    && bundle install
WORKDIR /workspace

# Bundled spec, scripts, docs (for distribution without mount)
COPY spec /halos/spec
COPY scripts /halos/scripts
COPY docs /halos/docs
COPY FOR_AGENTS.md AGENTS.md .cursorrules /halos/
COPY .cursor /halos/.cursor

# Copy scripts
COPY docker/validate.sh docker/build.sh docker/serve.sh docker/entrypoint.sh docker/resolve.sh docker/info.sh /
RUN chmod +x /validate.sh /build.sh /serve.sh /entrypoint.sh /resolve.sh /info.sh

ENTRYPOINT ["/entrypoint.sh"]
CMD ["validate"]
