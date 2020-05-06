install:
	npm install

start:
	node src/bin/gendiff.js -h

start-json:
	node src/bin/gendiff.js __tests__/JSON/before.json __tests__/JSON/after.json

start-yaml:
	node src/bin/gendiff.js __tests__/yaml/before.yml __tests__/yaml/after.yml

lint:
	npx eslint .

test:
	npm test

test-coverage:
	npm test -- --coverage
