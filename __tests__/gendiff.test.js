import fs from 'fs';
import gendiff from '../src/lib/getDiff.js';

describe('test gendiff', () => {
  const firstPath = '__tests__/JSON/before.json';
  const secondPath = '__tests__/JSON/after.json';
  const resultFileJSON = '__tests__/Result/result.txt';
  const resultFileYAML = '__tests__/Result/result.txt';

  const expectJSON = fs.readFileSync(resultFileJSON, 'utf-8');
  it('gendiff test JSON', () => {
    expect(gendiff(firstPath, secondPath)).toEqual(expectJSON);
  });

  const expectYAML = fs.readFileSync(resultFileYAML, 'utf-8');
  it('gendiff test YAML', () => {
    expect(gendiff(firstPath, secondPath)).toEqual(expectYAML);
  });
});
