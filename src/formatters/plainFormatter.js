import _ from 'lodash';

const getValue = (value) => (_.isObject(value) ? '[complex value]' : `'${value}'`);

const plainFormatter = (ast, property = []) => {
  const astFormatted = ast.map((node) => {
    const newProperty = _.concat(property, node.key).join('.');
    switch (node.status) {
      case 'added': {
        const updatedValue = getValue(node.updatedValue);
        return `Property '${newProperty}' was added with value: ${updatedValue}`;
      }
      case 'deleted': {
        return `Property '${newProperty}' was deleted`;
      }

      case 'nested': {
        return plainFormatter(node.children, newProperty);
      }

      case 'changed': {
        const updatedValue = getValue(node.updatedValue);
        const previousValue = getValue(node.previousValue);
        return `Property '${newProperty}' was changed from ${previousValue} to ${updatedValue}`;
      }
      default: {
        return '';
      }
    }
  })
    .flat()
    .filter((item) => item !== '');
  return astFormatted.join('\n');
};

export default (ast) => plainFormatter(ast);
