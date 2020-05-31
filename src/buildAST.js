import _ from 'lodash';

const hasChildren = (itemOne, itemTwo) => _.isObject(itemOne) && _.isObject(itemTwo);
const isEqual = (itemOne, itemTwo) => itemOne === itemTwo;
const hasNoValue = (item, key) => !_.has(item, key);

const buildAST = (dataOne, dataTwo) => {
  const keys = _.union(Object.keys(dataOne), Object.keys(dataTwo));
  const ast = keys.map((key) => {
    if (hasChildren(dataOne[key], dataTwo[key])) {
      return { key, status: 'nested', children: buildAST(dataOne[key], dataTwo[key]) };
    }
    if (isEqual(dataOne[key], dataTwo[key])) {
      return {
        key, status: 'unchanged', oldValue: dataOne[key], newValue: dataTwo[key],
      };
    }
    if (hasNoValue(dataOne, key)) {
      return { key, status: 'added', newValue: dataTwo[key] };
    }
    if (hasNoValue(dataTwo, key)) {
      return { key, status: 'deleted', newValue: dataOne[key] };
    }
    return {
      key, status: 'changed', oldValue: dataOne[key], newValue: dataTwo[key],
    };
  });
  return ast;
};

export default buildAST;
