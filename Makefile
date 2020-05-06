install:
	npm install

start:
	node src/bin/gendiff.js -h

start-plain:
	node src/bin/gendiff.js __tests__/JSON/before.json __tests__/JSON/after.json

lint:
	npx eslint .

test:
	npm test

test-coverage:
	npm test -- --coverage
