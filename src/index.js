import fs from 'fs';
import path from 'path';
import getParsed from './parser.js';
import buildAST from './buildAST.js';
import formatter from './formatters/index.js';

const readFile = (filepath) => fs.readFileSync(filepath, 'utf-8');
const readExt = (filepath) => path.extname(filepath);

export default (filepath1, filepath2, format) => {
  const dataOne = getParsed(readExt(filepath1))(readFile(filepath1));
  const dataTwo = getParsed(readExt(filepath2))(readFile(filepath2));
  const astData = buildAST(dataOne, dataTwo);
  return formatter(format)(astData);
};
