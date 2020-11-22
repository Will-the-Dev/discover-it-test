module.exports = {
    '**/*.ts?(x)': () => 'tsc -p tsconfig.json --noEmit',
    '**/*.(ts|js)?(x)': ['prettier --write', 'eslint --fix'],
};
