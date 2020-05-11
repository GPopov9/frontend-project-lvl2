import program from 'commander';
import getDiff from './lib/main.js';

console.log('');

program
  .description('Compares two configuration files and shows a difference')
  .version('1.0.0')
  .option('-f, --format [type]', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => getDiff(filepath1, filepath2, program.format))
  .helpOption('-h, --help', 'output usage information');

export default () => program.parse(process.argv);
