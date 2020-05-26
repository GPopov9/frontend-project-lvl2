import _ from 'lodash';

const SPACE = '    ';
const indent = (count) => _.repeat(SPACE, count);

const getString = (item, count) => {
  if (_.isObject(item)) {
    const result = Object.keys(item)
      .map((key) => `${key}: ${getString(item[key], count + 1)}`);
    const str = (`{\n${indent(count + 1)}${result.join('\n')}\n${indent(count)}}`);
    return str;
  }
  return item;
};

const defaultFormatter = (ast, count = 0) => {
  const astFormatted = ast
    .reduce((acc, node) => {
      switch (node.status) {
        case 'added': {
          const str = getString(node.updatedValue, count + 1);
          return `${acc}\n  ${indent(count)}+ ${node.key}: ${str}`;
        }
        case 'deleted': {
          const str = getString(node.updatedValue, count + 1);
          return `${acc}\n  ${indent(count)}- ${node.key}: ${str}`;
        }
        case 'changed': {
          const previousValue = getString(node.previousValue, count + 1);
          const updatedValue = getString(node.updatedValue, count + 1);
          return `${acc}\n  ${indent(count)}+ ${node.key}: ${updatedValue}\n  ${indent(count)}- ${node.key}: ${previousValue}`;
        }
        case 'nested': {
          const str = defaultFormatter(node.children, count + 1);
          return `${acc}\n  ${indent(count)}  ${node.key}: ${str}`;
        }
        default: {
          const str = node.previousValue;
          return `${acc}\n  ${indent(count)}  ${node.key}: ${str}`;
        }
      }
    }, '{');
  return `${astFormatted}\n${indent(count)}}`;
};

export default (ast) => defaultFormatter(ast);
