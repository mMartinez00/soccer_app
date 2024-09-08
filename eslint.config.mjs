import propTypes from 'eslint-plugin-react';

export default [
    { files: ['**/*.{js,mjs,cjs,jsx}'] },
    {
        plugins: {
            propTypes: propTypes,
        },
        rules: {
            'react/prop-types': 0,
        },
    },
];
