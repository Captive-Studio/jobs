#!/bin/sh
set -e

echo "Test $(basename $(pwd))"
rm -f output.json
yarn build
node ./dist/index.js
diff expected_output.json output.json
echo 'Test passed!'
