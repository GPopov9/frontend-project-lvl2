import _ from 'lodash';

const SPACE = '    ';
const indent = (count) => SPACE.repeat(count);

const getString = (item, count) => {
  if (_.isObject(item)) {
    const str = Object.keys(item)
      .map((key) => `{\n${indent(count + 1)}${key}: ${getString(item[key], count + 1)}\n${indent(count)}}`);
    return str;
  }
  return item;
};

const prettyFormatter = (ast, count = 0) => {
  const astFormatted = ast
    .reduce((acc, node) => {
      switch (node.status) {
        case 'added':
          return `${acc}\n  ${indent(count)}+ ${node.key}: ${getString(node.newValue, count + 1)}`;
        case 'deleted': {
          const str = getString(node.newValue, count + 1);
          return `${acc}\n  ${indent(count)}- ${node.key}: ${str}`;
        }
        case 'changed': {
          const previousValue = getString(node.oldValue, count + 1);
          const updatedValue = getString(node.newValue, count + 1);
          return `${acc}\n  ${indent(count)}+ ${node.key}: ${updatedValue}\n  ${indent(count)}- ${node.key}: ${previousValue}`;
        }
        case 'nested': {
          const str = prettyFormatter(node.children, count + 1);
          return `${acc}\n  ${indent(count)}  ${node.key}: ${str}`;
        }
        default: {
          const str = node.oldValue;
          return `${acc}\n  ${indent(count)}  ${node.key}: ${str}`;
        }
      }
    }, '');
  return `{${astFormatted}\n${indent(count)}}`;
};

export default (ast) => prettyFormatter(ast);
