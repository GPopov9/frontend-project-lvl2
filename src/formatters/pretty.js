import _ from 'lodash';

const indent = (count) => ' '.repeat(count === 0 ? 2 : 2 + count * 4);

const getString = (item, count) => {
  if (!_.isObject(item)) {
    return item;
  }
  return Object.entries(item)
    .map(([key, value]) => `{\n${indent(count + 1)}  ${key}: ${getString(value)}\n${indent(count)}  }`);
};

const prettyFormatter = (ast, count = 0) => ast.map((node) => {
  const oldString = `${node.key}: ${getString(node.oldValue, count)}`;
  const newString = `${node.key}: ${getString(node.newValue, count)}`;
  switch (node.status) {
    case 'added':
      return `${indent(count)}+ ${newString}`;
    case 'deleted':
      return `${indent(count)}- ${oldString}`;
    case 'changed':
      return `${indent(count)}+ ${newString}\n${indent(count)}- ${oldString}`;
    case 'unchanged':
      return `${indent(count)}  ${oldString}`;
    case 'nested':
      return `${indent(count)}  ${node.key}: {\n${prettyFormatter(node.children, count + 1)}\n${indent(count)}  }`;
    default:
      throw new Error(`Invalid status '${node.status}'. Please check!`);
  }
}).join('\n');

export default (ast) => `{\n${prettyFormatter(ast)}\n}`;
