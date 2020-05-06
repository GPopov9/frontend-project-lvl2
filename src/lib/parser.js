import YAML from 'yamljs';

export default (extension) => {
  switch (extension) {
    case '.json':
      return JSON.parse;
    case '.yml':
      return YAML.parse;
    default: 
      return undefined;
  }
};
