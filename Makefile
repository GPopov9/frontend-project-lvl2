install:
	npm install

publish: 
	npm publish --dry-run

start:
	node src/bin/gendiff.js -h

start-plain:
	node src/bin/gendiff.js ./__tests__/before.json ./__tests__/after.json

lint:
	npx eslint .