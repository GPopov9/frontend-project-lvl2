import defaultFormatter from './default.js';
import plainFormatter from './plain.js';
import jsonFormatter from './json.js';

export default (format) => {
  switch (format) {
    case 'plain': {
      return plainFormatter;
    }
    case 'json': {
      return jsonFormatter;
    }
    default: {
      return defaultFormatter;
    }
  }
};
