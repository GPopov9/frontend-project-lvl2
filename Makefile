install:
	npm install

start:
	node src/bin/gendiff.js -h

start-json:
	node src/bin/gendiff.js __tests__/__fixtures__/before.json __tests__/__fixtures__/after.json

start-json-nested:
	node src/bin/gendiff.js __tests__/__fixtures__/json/beforeNested.json __tests__/__fixtures__/json/afterNested.json

start-json-nested-plain:
	node src/bin/gendiff.js --format=plain __tests__/__fixtures__/json/beforeNested.json __tests__/__fixtures__/json/afterNested.json

start-json-nested-plain-json:
	node src/bin/gendiff.js --format=json __tests__/__fixtures__/json/beforeNested.json __tests__/__fixtures__/json/afterNested.json

start-yaml:
	node src/bin/gendiff.js __tests__/__fixtures__/before.yml __tests__/__fixtures__/after.yml

start-ini:
	node src/bin/gendiff.js __tests__/__fixtures__/before.ini __tests__/__fixtures__/after.ini

lint:
	npx eslint .

test:
	npm test

test-coverage:
	npm test -- --coverage
