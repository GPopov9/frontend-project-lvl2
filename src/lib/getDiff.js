import fs from 'fs';
import _ from 'lodash';


const isEqual = (firstData, secondData) => firstData === secondData;
const hasNoValue = (data, key) => !_.has(data, key);
const space = ' ';
const format = (data) => {
  const result = `{\n${data.join('\n')}\n}`;
  return result;
};

export default (filepath1, filepath2) => {
  const dataFirst = fs.readFileSync(filepath1, 'utf-8');
  const dataSecond = fs.readFileSync(filepath2, 'utf-8');
  const parseFirst = JSON.parse(dataFirst);
  const parseSecond = JSON.parse(dataSecond);
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

/*     const result = keysUnion.reduce((acc, key) => {
        if (isEqual(parseFirst[key], parseSecond[key])) {
            acc += `  ${key}: ${parseFirst[key]}\n`;
        } else if (hasNoValue(parseFirst, key)) {
            acc += `+ ${key}: ${parseSecond[key]}\n`;
        } else if (hasNoValue(parseSecond, key)) {
            acc += `- ${key}: ${parseFirst[key]}\n`;
        } else {
            acc += `+ ${key}: ${parseSecond[key]}\n- ${key}: ${parseFirst[key]}\n`
        }
        return acc;
    }, '');  */
