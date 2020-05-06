import gendiff from '../src/lib/getDiff.js';
import fs from 'fs';

describe ('test gendiff', () => {
    const firstPath = '__tests__/JSON/before.json'; 
    const secondPath = '__tests__/JSON/after.json';
    const resultPath = '__tests__/JSON/result.txt';

    const expectResult = fs.readFileSync(resultPath, 'utf-8');
    console.log(expectResult);
    
    it('gendiff test JSON', () => {
        expect(gendiff(firstPath, secondPath)).toEqual(expectResult);
    });
});