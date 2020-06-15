import program from 'commander';
import getDiff from '../index.js';

program
  .description('Compares two configuration files and shows a difference')
  .version('1.0.0')
  .option('-f, --format [type]', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((data1, data2) => getDiff(data1, data2, program.format))
  .helpOption('-h, --help', 'output usage information');

program.parse(process.argv);
