import fs from 'fs';
import path from 'path';
import getParsed from './parser.js';
import buildAST from './buildAST.js';

export default (filepath1, filepath2) => {
  const dataOne = fs.readFileSync(filepath1);
  const extOne = path.extname(filepath1);
  const dataTwo = fs.readFileSync(filepath2);
  const extTwo = path.extname(filepath2);
  const parsedOne = getParsed(extOne)(dataOne);
  const parsedTwo = getParsed(extTwo)(dataTwo);
  const astData = buildAST(parsedOne, parsedTwo);

  return astData;

}