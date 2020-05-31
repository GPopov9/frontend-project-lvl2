const isNumeric = (key, value) => ((Number.isNaN(Number(value)) || typeof value === 'boolean') ? value : Number(value));
export default (ast) => JSON.stringify(ast, isNumeric, 2);
