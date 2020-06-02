import fs from 'fs';
import gendiff from '../src/index.js';

const types = ['json', 'yml', 'ini'];
const formats = ['default', 'plain', 'json'];

const expected = (format) => fs.readFileSync(`__tests__/__fixtures__/result-${format}.txt`, 'utf-8');
const after = '__tests__/__fixtures__/after';
const before = '__tests__/__fixtures__/before';

describe('gendiff', () => {
  formats.forEach((format) => test.each(types)(`Test %s file with ${format} format`, (type) => {
    expect(gendiff(`${before}.${type}`, `${after}.${type}`, format)).toBe(expected(format));
  }));
});
