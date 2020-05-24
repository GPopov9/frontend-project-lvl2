import fs from 'fs';
import gendiff from '../src/index.js';

describe('Test gendiff', () => {
  const expectedDefault = fs.readFileSync('__tests__/__fixtures__/result-default.txt', 'utf-8');
  const expectedPlain = fs.readFileSync('__tests__/__fixtures__/result-plain.txt', 'utf-8');
  const expectedJSON = fs.readFileSync('__tests__/__fixtures__/result-json.txt', 'utf-8');

  const firstPath = '__tests__/__fixtures__/before';
  const secondPath = '__tests__/__fixtures__/after';

  test.each([
    [`${firstPath}.json`, `${secondPath}.json`, expectedDefault],
    [`${firstPath}.ini`, `${secondPath}.ini`, expectedDefault],
    [`${firstPath}.yml`, `${secondPath}.yml`, expectedDefault],
  ])('Default Format Test for json, ini, yaml', (a, b, expected) => {
    expect(gendiff(a, b)).toEqual(expected);
  });

  test.each([
    [`${firstPath}.json`, `${secondPath}.json`, expectedPlain],
    [`${firstPath}.ini`, `${secondPath}.ini`, expectedPlain],
    [`${firstPath}.yml`, `${secondPath}.yml`, expectedPlain],
  ])('Plain Format Test for json, ini, yaml', (a, b, expected) => {
    expect(gendiff(a, b, 'plain')).toEqual(expected);
  });

  test.each([
    [`${firstPath}.json`, `${secondPath}.json`, expectedJSON],
    [`${firstPath}.ini`, `${secondPath}.ini`, expectedJSON],
    [`${firstPath}.yml`, `${secondPath}.yml`, expectedJSON],
  ])('JSON Format Test for json, ini, yaml', (a, b, expected) => {
    expect(gendiff(a, b, 'json')).toEqual(expected);
  });
});
