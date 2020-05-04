#!/usr/bin/env node

const program = require('commander');

console.log('');

program
  .description('Compares two configuration files and shows a difference')
  .option('-V, --version', 'output the version number')
  .helpOption('-h, --help', 'output usage information');

program.parse(process.argv);

