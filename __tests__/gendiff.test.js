import fs from 'fs';
import gendiff from '../src/index.js';

describe('test gendiff', () => {
  const resultJsonSimple = '__tests__/Result/result.txt';
  const resultJsonNested = '__tests__/Result/result-nested.txt';
  const resultJsonPlain = '__tests__/Result/result-plain.txt';
  const resultJsonFormat = '__tests__/Result/result-json.txt';

  const firstPathNested = '__tests__/__fixtures__/json/beforeNested.json';
  const secondPathNested = '__tests__/__fixtures__/json/afterNested.json';

  const expectJsonSimple = fs.readFileSync(resultJsonSimple, 'utf-8');
  const expectJsonNested = fs.readFileSync(resultJsonNested, 'utf-8');
  const expectJsonPlain = fs.readFileSync(resultJsonPlain, 'utf-8');
  const expectJsonFormatted = fs.readFileSync(resultJsonFormat, 'utf-8');

  const firstPathPlain = '__tests__/__fixtures__/before';
  const secondPathPlain = '__tests__/__fixtures__/after';

  test.each([
    [`${firstPathPlain}.json`, `${secondPathPlain}.json`, expectJsonSimple],
    [`${firstPathPlain}.yml`, `${secondPathPlain}.yml`, expectJsonSimple],
    [`${firstPathPlain}.ini`, `${secondPathPlain}.ini`, expectJsonSimple],
  ])('Simple format JSON, INI, YAML', (a, b, expected) => {
    expect(gendiff(a, b)).toEqual(expected);
  });


  it('gendiff test JSON-Nested', () => {
    expect(gendiff(firstPathNested, secondPathNested)).toEqual(expectJsonNested);
  });

  it('gendiff test JSON-Plain', () => {
    expect(gendiff(firstPathNested, secondPathNested, 'plain')).toEqual(expectJsonPlain);
  });

  it('gendiff test JSON-Formatted', () => {
    expect(gendiff(firstPathNested, secondPathNested, 'json')).toEqual(expectJsonFormatted);
  });
});
