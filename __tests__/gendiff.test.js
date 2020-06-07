import fs from 'fs';
import gendiff from '../src/index.js';

const types = ['json', 'yml', 'ini'];
const formats = ['pretty', 'plain', 'json'];

const expected = (format) => fs.readFileSync(`__tests__/__fixtures__/result-${format}.txt`, 'utf-8');
const after = '__tests__/__fixtures__/after';
const before = '__tests__/__fixtures__/before';

describe.each(formats)('Generate differences tests', (format) => {
  it.each(types)(`For %s file type with ${format} format`, (type) => {
    expect(gendiff(`${before}.${type}`, `${after}.${type}`, format)).toBe(expected(format));
  });
});
