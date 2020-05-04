install:
	npm install

publish: 
	npm publish --dry-run

start:
	node src/bin/gendiff.js -h