import _ from 'lodash';

const getString = (item, indent) => {
  if (!_.isObject(item)) {
    return item;
  }
  return Object.entries(item)
    .map(([key, value]) => `{\n${indent}      ${key}: ${getString(value)}\n${indent}  }`);
};

const prettyFormatter = (ast, count = 0) => {
  const indent = ' '.repeat(count === 0 ? 2 : 2 + count * 4);
  const astFormatted = ast
    .map((node) => {
      
      const oldString = `${node.key}: ${getString(node.oldValue, indent)}`;
      const newString = `${node.key}: ${getString(node.newValue, indent)}`;
      switch (node.status) {
        case 'added':
          return `${indent}+ ${newString}`;
        case 'deleted': 
          return `${indent}- ${oldString}`;
        case 'changed': 
          return `${indent}+ ${newString}\n${indent}- ${oldString}`;
        case 'unchanged': 
          return `${indent}  ${oldString}`;
        case 'nested': 
          return `${indent}  ${node.key}: ${prettyFormatter(node.children, count + 1)}\n${indent}  }`;

        default: 
          throw new Error(`Invalid status '${node.status}'. Please check!`);
      }
    }).join('\n');
  return `{\n${astFormatted}`;
};

export default (ast) => `${prettyFormatter(ast)}\n}`;
