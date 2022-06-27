module.exports = {
    preset: 'es-jest',
    testPathIgnorePatterns: [
        '/node_modules/',
        '/lib/',
        '/build/',
        '/.cache/',
        '/docs/',
        '/public/',
    ],
    moduleNameMapper: {
        '^(\\.{1,2}/.*)\\.js$': '$1',
    },
};