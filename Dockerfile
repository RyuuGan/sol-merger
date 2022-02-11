from node:16-stretch

WORKDIR /sol-merger
COPY test-cli.sh test-docker-entrypoint.sh package.json package-lock.json tsconfig.json tsconfig.app.json tslint.json ./
COPY test test/
ADD dist dist/
ENV NPM_REGISTRY_URL=http://localhost:4873
ENV NPM_USERNAME=admin
ENV NPM_PASSWORD=admin
ENV NPM_EMAIL=admin@example.com
ENV NPM_SCOPE=test-org
RUN npm i
# RUN npm run build
CMD /sol-merger/test-docker-entrypoint.sh
