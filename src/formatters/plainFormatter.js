import _ from 'lodash';

const getValue = (item, delimiter) => item.join(delimiter);

const plainFormatter = (ast) => {
  const iter = (tree, property = []) => {
    const result = tree.map((node) => {
      const newProperty = _.concat(property, node.key);
      switch (node.status) {
        case 'added': {
          const updatedValue = _.isObject(node.updatedValue) ? '[complex value]' : `value: '${node.updatedValue}'`;
          return `Property '${getValue(newProperty, '.')}' was added with ${updatedValue}`;
        }
        case 'deleted': {
          return `Property '${getValue(newProperty, '.')}' was deleted`;
        }

        case 'nested': {
          return iter(node.children, newProperty);
        }

        case 'changed': {
          const updatedValue = _.isObject(node.updatedValue) ? '[complex value]' : node.updatedValue;
          const previousValue = _.isObject(node.previousValue) ? '[complex value]' : node.previousValue;
          return `Property '${getValue(newProperty, '.')}' was changed from '${previousValue}' to '${updatedValue}'`;
        }
        default: {
          return '';
        }
      }
    }).flat().filter((item) => item !== '');

    return getValue(result, '\n');
  };

  return iter(ast);
};

export default plainFormatter;
