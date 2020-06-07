import yaml from 'js-yaml';
import ini from 'ini';
import _ from 'lodash';

const iniParseStandard = (data) => ini.parse(data);

const iniParseCorrect = (data) => Object.entries(data)
  .reduce((acc, [key, value]) => {
    if (_.isObject(value)) {
      return { ...acc, [key]: iniParseCorrect(value) };
    }
    if (Number.isNaN(Number(value)) || (typeof (value) === 'boolean')) {
      return { ...acc, [key]: value };
    }
    return { ...acc, [key]: Number(value) };
  }, {});

const iniParsefinal = _.flow([iniParseStandard, iniParseCorrect]);

const parser = (data, extension) => {
  switch (extension) {
    case 'json':
      return JSON.parse(data);
    case 'yml':
      return yaml.safeLoad(data);
    case 'ini':
      return iniParsefinal(data);
    default:
      throw new Error(`Unknown format ${extension}!`);
  }
};

export default parser;
