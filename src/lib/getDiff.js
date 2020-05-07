import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import parser from './parser.js';


const isEqual = (firstData, secondData) => firstData === secondData;
const hasNoValue = (data, key) => !_.has(data, key);
const space = ' ';
const format = (data) => {
  const result = `{\n${data.join('\n')}\n}`;
  return result;
};

export default (filepath1, filepath2) => {
  const dataFirst = fs.readFileSync(filepath1, 'utf-8');
  const extFirst = path.extname(filepath1);
  const dataSecond = fs.readFileSync(filepath2, 'utf-8');
  const extSecond = path.extname(filepath2);
  const parseFirst = parser(extFirst)(dataFirst);
  const parseSecond = parser(extSecond)(dataSecond);

  const keysUnion = _.union(Object.keys(parseFirst), Object.keys(parseSecond));
  const result = _.flattenDeep(keysUnion.map((key) => {
    if (isEqual(parseFirst[key], parseSecond[key])) {
      return `${space.repeat(4)}${key}: ${parseFirst[key]}`;
    } if (hasNoValue(parseFirst, key)) {
      return `${space.repeat(2)}+ ${key}: ${parseSecond[key]}`;
    } if (hasNoValue(parseSecond, key)) {
      return `${space.repeat(2)}- ${key}: ${parseFirst[key]}`;
    }
    return [`${space.repeat(2)}+ ${key}: ${parseSecond[key]}`, `${space.repeat(2)}- ${key}: ${parseFirst[key]}`];
  }));
  console.log(format(result));
  return format(result);
};

