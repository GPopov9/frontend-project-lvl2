import _ from 'lodash';

const SPACE = '    ';
const indent = (count) => _.repeat(SPACE, count);

const getString = (item, count) => {
  if (_.isObject(item)) {
    const keysObj = Object.keys(item);
    const result = keysObj.map((key) => `${key}: ${getString(item[key], count + 1)}`);
    const str = (`{\n${indent(count + 1)}${result.join('\n')}\n${indent(count)}}`);
    return `${str}${indent(count)}`;
  }
  return item;
};

const defaultFormatter = (ast) => {
  const iter = (tree, count = 0) => {
    const result = tree
      .reduce((acc, node) => {
        switch (node.status) {
          case 'added': {
            const operator = '+ ';
            const str = getString(node.updatedValue, count + 1);
            return `${acc}\n  ${indent(count)}${operator}${node.key}: ${str}`;
          }
          case 'deleted': {
            const operator = '- ';
            const str = getString(node.previousValue, count + 1);
            return `${acc}\n  ${indent(count)}${operator}${node.key}: ${str}`;
          }
          case 'changed': {
            const previousValue = getString(node.previousValue, count + 1);
            const updatedValue = getString(node.updatedValue, count + 1);
            return `${acc}\n  ${indent(count)}+ ${node.key}: ${updatedValue}\n  ${indent(count)}- ${node.key}: ${previousValue}`;
          }
          case 'nested': {
            const str = iter(node.children, count + 1);
            return `${acc}\n  ${indent(count)}  ${node.key}: ${str}`;
          }
          default: {
            const str = node.previousValue;
            return `${acc}\n  ${indent(count)}  ${node.key}: ${str}`;
          }
        }
      }, '{');
    return `${result}\n${indent(count)}}`;
  };
  return iter(ast);
};

export default defaultFormatter;
