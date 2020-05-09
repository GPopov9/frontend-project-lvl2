import defaultFormatter from './defaultFormatter.js';
import plainFormatter from './plainFormatter.js';
import jsonFormatter from './jsonFormatter.js';

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
