import fs from 'fs';
import gendiff from '../src/index.js';

const extensions = ['.json', '.yml', '.ini'];

const test = (ext, format) => {
  it(`Test ${ext} with ${format}`, () => {
    const before = `__tests__/__fixtures__/before${ext}`;
    const after = `__tests__/__fixtures__/after${ext}`;
    const expected = fs.readFileSync(`__tests__/__fixtures__/result-${format}.txt`, 'utf-8');
    expect(gendiff(before, after, format)).toEqual(expected);
  });
};

describe('gendiff', () => {
  extensions.forEach((extension) => test(extension, 'default'));
  extensions.forEach((extension) => test(extension, 'plain'));
  extensions.forEach((extension) => test(extension, 'json'));
});
