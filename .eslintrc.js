module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            node: {
                paths: ['src'],
                extensions: ['.js', '.jsx'],
            },
        },
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:prettier/recommended', // Make sure this is always the last element in the array.
    ],
    plugins: ['react-refresh', 'simple-import-sort', 'prettier'],
    rules: {
        'prettier/prettier': ['error', {}, { usePrettierrc: true }],
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
    },
};
