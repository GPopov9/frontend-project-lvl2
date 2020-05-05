import fs from 'fs';
import _ from 'lodash';


const isEqual = (firstData, secondData) => firstData === secondData;
const hasNoValue = (data, key) => !_.has(data, key);

export default (filepath1, filepath2) => {
    const dataFirst = fs.readFileSync(filepath1, 'utf-8');
    const dataSecond = fs.readFileSync(filepath2, 'utf-8');
    const parseFirst = JSON.parse(dataFirst);
    const parseSecond = JSON.parse(dataSecond);

    const keysUnion = _.union(Object.keys(parseFirst), Object.keys(parseSecond));
    
    const result = keysUnion.reduce((acc, key) => {
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
    }, '');
    


    console.log(result);
    
};