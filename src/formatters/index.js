import prettyFormatter from './pretty.js';
import plainFormatter from './plain.js';
import jsonFormatter from './json.js';

export default (format = 'pretty') => {
  switch (format) {
    case 'plain': {
      return plainFormatter;
    }
    case 'json': {
      return jsonFormatter;
    }
    case 'pretty': {
      return prettyFormatter;
    }
    default: {
      throw new Error(`Incorrect format ${format}`);
    }
  }
};
