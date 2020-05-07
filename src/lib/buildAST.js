import _ from 'lodash';

const hasChildren = (itemOne, itemTwo) => _.isObject(itemOne) && _.isObject(itemTwo);
const addNode = (children, key, status, previousValue, updatedValue) => {
 {children, key, status, previousValue, updatedValue} 
};

const isEqual = (firstData, secondData) => firstData === secondData;
const hasNoValue = (data, key) => !_.has(data, key);


export default (dataOne, dataTwo) => {
  const keysUnion = _.union(Object.keys(dataOne), Object.keys(dataTwo));
  const result = keysUnion.map((key) => {
       
   
    
  });
  
  console.log(format(result));
  return format(result);
};

