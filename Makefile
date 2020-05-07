install:
	npm install

start:
	node src/bin/gendiff.js -h

start-json:
	node src/bin/gendiff.js __tests__/__fixtures__/before.json __tests__/__fixtures__/after.json

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
