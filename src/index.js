import program from 'commander';
import getDiff from './lib/buildAST.js';

console.log('');

program
  .description('Compares two configuration files and shows a difference')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => getDiff(filepath1, filepath2))
  .option('-V, --version', 'output the version number')
  .option('-f, --format [type]', 'output format')
  .helpOption('-h, --help', 'output usage information');

export default () => program.parse(process.argv);
