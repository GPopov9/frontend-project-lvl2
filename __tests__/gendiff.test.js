import fs from 'fs';
import gendiff from '../src/lib/getDiff.js';

describe('test gendiff', () => {
  const firstPath = '__tests__/__fixtures__/before';
  const secondPath = '__tests__/__fixtures__/after';
  const resultFileJSON = '__tests__/Result/result.txt';
  const resultFileYAML = '__tests__/Result/result.txt';
  const resultFileINI = '__tests__/Result/result.txt';

  const expectJSON = fs.readFileSync(resultFileJSON, 'utf-8');
  it('gendiff test JSON', () => {
    expect(gendiff(`${firstPath}.json`, `${secondPath}.json`)).toEqual(expectJSON);
  });

  const expectYAML = fs.readFileSync(resultFileYAML, 'utf-8');
  it('gendiff test YAML', () => {
    expect(gendiff(`${firstPath}.yml`, `${secondPath}.yml`)).toEqual(expectYAML);
  });

  const expectINI = fs.readFileSync(resultFileINI, 'utf-8');
  it('gendiff test INI', () => {
    expect(gendiff(`${firstPath}.ini`, `${secondPath}.ini`)).toEqual(expectINI);
  });
});
