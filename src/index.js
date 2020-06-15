import fs from 'fs';
import path from 'path';
import parse from './parser.js';
import buildAST from './buildAST.js';
import format from './formatters/index.js';

const readFile = (filepath) => fs.readFileSync(filepath, 'utf-8');
const readExt = (filepath) => path.extname(filepath).slice(1);

export default (filepath1, filepath2, outputFormat) => {
  const dataOne = parse(readFile(filepath1), readExt(filepath1));
  const dataTwo = parse(readFile(filepath2), readExt(filepath2));
  const astData = buildAST(dataOne, dataTwo);
  return format(outputFormat)(astData);
};
