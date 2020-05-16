import _ from 'lodash';

const hasChildren = (itemOne, itemTwo) => _.isObject(itemOne) && _.isObject(itemTwo);
const addNode = (key, status, previousValue, updatedValue, children) => (
  {
    key, status, previousValue, updatedValue, children,
  }
);
const isEqual = (itemOne, itemTwo) => itemOne === itemTwo;
const hasNoValue = (item, key) => !_.has(item, key);


const buildAST = (dataOne, dataTwo) => {
  const keys = _.union(Object.keys(dataOne), Object.keys(dataTwo));
  const ast = keys.map((key) => {
    if (hasChildren(dataOne[key], dataTwo[key])) {
      const children = buildAST(dataOne[key], dataTwo[key]);
      return addNode(key, 'nested', dataOne[key], dataTwo[key], children);
    }
    if (isEqual(dataOne[key], dataTwo[key])) {
      return addNode(key, 'notChanged', dataOne[key], dataTwo[key], []);
    }
    if (hasNoValue(dataOne, key)) {
      return addNode(key, 'added', 'none', dataTwo[key], []);
    }
    if (hasNoValue(dataTwo, key)) {
      return addNode(key, 'deleted', dataOne[key], 'none', []);
    }
    return addNode(key, 'changed', dataOne[key], dataTwo[key], []);
  });
  return ast;
};

export default buildAST;
