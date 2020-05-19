import { readFile, readExt } from './lib/fileOps.js';
import getParsed from './lib/parser.js';
import buildAST from './lib/buildAST.js';
import formatter from './formatters/index.js';

export default (filepath1, filepath2, format) => {
  const dataOne = readFile(filepath1);
  const dataTwo = readFile(filepath2);

  const extOne = readExt(filepath1);
  const extTwo = readExt(filepath2);

  const parsedOne = getParsed(extOne)(dataOne);
  const parsedTwo = getParsed(extTwo)(dataTwo);

  const astData = buildAST(parsedOne, parsedTwo);

  const resultFormatted = formatter(format)(astData);

  return resultFormatted;
};
