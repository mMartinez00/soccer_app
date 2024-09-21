import react from 'eslint-plugin-react';
import babelParser from '@babel/eslint-parser';

export default [
    {
        files: ['**/*.{js,mjs,cjs,jsx}'],
        languageOptions: {
            parser: babelParser,
            parserOptions: {
                requireConfigFile: false,
                babelOptions: {
                    presets: ['@babel/preset-react'],
                },
                ecmaFeatures: {
                    jsx: true,
                },
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
