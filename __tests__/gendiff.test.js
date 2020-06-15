import fs from 'fs';
import gendiff from '../src/index.js';

const types = ['json', 'yml', 'ini'];
const formats = ['pretty', 'plain', 'json'];
const path = '__tests__/__fixtures__/';

const expected = (format) => fs.readFileSync(`${path}result-${format}.txt`, 'utf-8');

describe.each(formats)('Generate differences tests', (format) => {
  it.each(types)(`For %s file type with ${format} format`, (type) => {
    expect(gendiff(`${path}before.${type}`, `${path}after.${type}`, format)).toBe(expected(format));
  });
});
