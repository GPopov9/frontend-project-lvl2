import fs from 'fs';
import path from 'path';

export const readFile = (filepath) => fs.readFileSync(filepath, 'utf-8');
export const readExt = (filepath) => path.extname(filepath);
