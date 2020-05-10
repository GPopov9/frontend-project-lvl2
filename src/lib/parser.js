import YAML from 'js-yaml';
import INI from 'ini';


export default (extension) => {
  switch (extension) {
    case '.json':
      return JSON.parse;
    case '.yml':
      return YAML.safeLoad;
    case '.ini':
      return INI.decode;
    default:
      return undefined;
  }
};
