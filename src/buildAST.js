import _ from 'lodash';

const buildAST = (dataOne, dataTwo) => {
  const keys = _.union(Object.keys(dataOne), Object.keys(dataTwo));
  const ast = keys.map((key) => {
    if (_.isObject(dataOne[key]) && _.isObject(dataTwo[key])) {
      return { key, status: 'nested', children: buildAST(dataOne[key], dataTwo[key]) };
    }
    if (dataOne[key] === dataTwo[key]) {
      return {
        key, status: 'unchanged', oldValue: dataOne[key], newValue: dataTwo[key],
      };
    }
    if (!_.has(dataOne, key)) {
      return { key, status: 'added', newValue: dataTwo[key] };
    }
    if (!_.has(dataTwo, key)) {
      return { key, status: 'deleted', newValue: dataOne[key] };
    }
    return {
      key, status: 'changed', oldValue: dataOne[key], newValue: dataTwo[key],
    };
  });
  return ast;
};

export default buildAST;
