#!/usr/bin/env node
import program from 'commander';

console.log('');

program
  .description('Compares two configuration files and shows a difference')
  .arguments('<filepath1> <filepath2>')
  .option('-V, --version', 'output the version number')
  .option('-f, --format [type]', 'output format')
  .helpOption('-h, --help', 'output usage information');

program.parse(process.argv);
