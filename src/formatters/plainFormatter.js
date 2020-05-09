import _ from 'lodash';

const getValue = (item, delimiter) => item.join(delimiter);

const plainFormatter = (ast, value = []) => {
  const result = ast.map((node) => {
    const newValue = _.concat(value, node.key);
    switch (node.status) {
      case 'added': {
        const updatedValue = _.isObject(node.updatedValue) ? '[complex value]' : `value: '${node.updatedValue}'`;
        return `Property '${getValue(newValue, '.')}' was added with ${updatedValue}`;
      }
      case 'deleted': {
        return `Property '${getValue(newValue, '.')}' was deleted`;
      }

      case 'nested': {
        return plainFormatter(node.children, newValue);
      }

      case 'changed': {
        const updatedValue = _.isObject(node.updatedValue) ? '[complex value]' : node.updatedValue;
        const previousValue = _.isObject(node.previousValue) ? '[complex value]' : node.previousValue;
        return `Property '${getValue(newValue, '.')}' was changed from '${previousValue}' to '${updatedValue}'`;
      }
      default: {
        return '';
      }
    }
  }).flat().filter((item) => item !== '');

  return getValue(result, '\n');
};

export default plainFormatter;
