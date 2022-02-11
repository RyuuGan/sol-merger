set -e

./node_modules/.bin/verdaccio &
sleep 1
./node_modules/.bin/npm-cli-adduser --registry $NPM_REGISTRY_URL --username $NPM_USERNAME --password $NPM_PASSWORD --email $NPM_EMAIL --scope $NPM_SCOPE

npm publish --dry-run
npm whoami --registry $NPM_REGISTRY_URL
sed -i -r "s/\"name\": \"sol-merger\"/\"name\": \"@$NPM_SCOPE\/sol-merger\"/" package.json
npm publish --registry $NPM_REGISTRY_URL
npm i -g "@$NPM_SCOPE/sol-merger@latest" --registry $NPM_REGISTRY_URL
/bin/bash ./test-cli.sh
