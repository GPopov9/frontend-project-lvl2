install:
	npm install

start:
	node src/bin/gendiff.js -h

start-default:
	node src/bin/gendiff.js __tests__/__fixtures__/before.json __tests__/__fixtures__/after.json

start-plain:
	node src/bin/gendiff.js --format=plain __tests__/__fixtures__/before.json __tests__/__fixtures__/after.json

start-json:
	node src/bin/gendiff.js --format=json __tests__/__fixtures__/before.ini __tests__/__fixtures__/after.ini

lint:
	npx eslint .

test:
	npm test

test-coverage:
	npm test -- --coverage
