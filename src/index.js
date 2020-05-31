import fs from 'fs';
import path from 'path';
import getDataParsed from './parser.js';
import buildAST from './buildAST.js';
import formatter from './formatters/index.js';

const readFile = (filepath) => fs.readFileSync(filepath, 'utf-8');
const readExt = (filepath) => path.extname(filepath).slice(1);

export default (filepath1, filepath2, format) => {
  const dataOne = getDataParsed(readFile(filepath1), readExt(filepath1));
  const dataTwo = getDataParsed(readFile(filepath2), readExt(filepath2));
  const astData = buildAST(dataOne, dataTwo);
  return formatter(format)(astData);
};
