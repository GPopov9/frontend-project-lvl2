import fs from 'fs';
import gendiff from '../src/lib/main.js';

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

  it('gendiff test JSON-Simple', () => {
    const firstPathPlain = '__tests__/__fixtures__/json/before.json';
    const secondPathPlain = '__tests__/__fixtures__/json/after.json';
    expect(gendiff(firstPathPlain, secondPathPlain)).toEqual(expectJsonSimple);
  });

  it('gendiff test INI-Simple', () => {
    const firstPathPlain = '__tests__/__fixtures__/ini/before.ini';
    const secondPathPlain = '__tests__/__fixtures__/ini/after.ini';
    expect(gendiff(firstPathPlain, secondPathPlain)).toEqual(expectJsonSimple);
  });

  it('gendiff test Yaml-Simple', () => {
    const firstPathPlain = '__tests__/__fixtures__/yaml/before.yml';
    const secondPathPlain = '__tests__/__fixtures__/yaml/after.yml';
    expect(gendiff(firstPathPlain, secondPathPlain)).toEqual(expectJsonSimple);
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
