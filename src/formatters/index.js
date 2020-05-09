import defaultFormatter from './defaultFormatter.js';
import plainFormatter from './plainFormatter.js';

export default (format) => {
  switch (format) {
    case 'plain': {
      return plainFormatter;
    }
    default: {
      return defaultFormatter;
    }
  }
};
