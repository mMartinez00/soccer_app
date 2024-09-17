import react from 'eslint-plugin-react';
import babelParser from '@babel/eslint-parser';

export default [
    {
        files: ['**/*.{js,mjs,cjs,jsx}'],
        languageOptions: {
            parser: babelParser,
            parserOptions: {
                requireConfigFile: false,
            },
        },
    },
    {
        plugins: {
            react,
        },
        rules: {
            'react/prop-types': 0,
        },
    },
];
