import fs from 'fs';
import gendiff from '../src/index.js';

const expected = (format) => fs.readFileSync(`__tests__/__fixtures__/result-${format}.txt`, 'utf-8');
const after = '__tests__/__fixtures__/after';
const before = '__tests__/__fixtures__/before';

describe('gendiff', () => {
  test.each`
  ext | format 
  ${'.json'} | ${'default'}
  ${'.ini'} | ${'default'} 
  ${'.yml'} | ${'default'} 
  ${'.json'} | ${'plain'} 
  ${'.ini'} | ${'plain'} 
  ${'.yml'} | ${'plain'} 
  ${'.json'} | ${'json'} 
  ${'.ini'} | ${'json'} 
  ${'.yml'} | ${'json'}   
  `('Test $ext file with $format format', ({ ext, format }) => {
  expect(gendiff(`${before}${ext}`, `${after}${ext}`, format)).toBe(expected(format));
});
});
