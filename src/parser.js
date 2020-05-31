import yaml from 'js-yaml';
import ini from 'ini';
import _ from 'lodash';

const iniParse = (data) => {
  const file = ini.parse(data);

  const iter = (node) => Object.entries(node)
    .reduce((acc, [key, value]) => {
      if (_.isObject(value)) {
        return { ...acc, [key]: iter(value) };
      }
      if (Number.isNaN(Number(value)) || (typeof (value) === 'boolean')) {
        return { ...acc, [key]: value };
      }
      return { ...acc, [key]: Number(value) };
    }, {});
  return iter(file);
};

const parser = (data, extension) => {
  switch (extension) {
    case 'json':
      return JSON.parse(data);
    case 'yml':
      return yaml.safeLoad(data);
    case 'ini':
      return iniParse(data);
    default:
      throw new Error(`Unknown format ${extension}!`);
  }
};

export default parser;
