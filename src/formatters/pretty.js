import _ from 'lodash';

const SPACE = '    ';
const indent = (count) => SPACE.repeat(count);

const getString = (item, count) => {
  if (_.isObject(item)) {
    const str = Object.entries(item)
      .map(([key, value]) => `{\n${indent(count + 1)}${key}: ${getString(value, count + 1)}\n${indent(count)}}`);
    return str;
  }
  return item;
};

const prettyFormatter = (ast, count = 0) => {
  const astFormatted = ast
    .map((node) => {
      const oldString = `${node.key}: ${getString(node.oldValue, count + 1)}`;
      const newString = `${node.key}: ${getString(node.newValue, count + 1)}`;
      switch (node.status) {
        case 'added':
          return `  ${indent(count)}+ ${newString}`;
        case 'deleted': {
          return `  ${indent(count)}- ${newString}`;
        }
        case 'changed': {
          return `  ${indent(count)}+ ${newString}\n  ${indent(count)}- ${oldString}`;
        }
        case 'nested': {
          return `  ${indent(count)}  ${node.key}: ${prettyFormatter(node.children, count + 1)}`;
        }
        case 'unchanged': {
          return `  ${indent(count)}  ${node.key}: ${node.oldValue}`;
        }
        default: {
          throw new Error(`Invalid status '${node.status}'. Please check!`);
        }
      }
    }).join('\n');
  return `{\n${astFormatted}\n${indent(count)}}`;
};

export default (ast) => prettyFormatter(ast);
