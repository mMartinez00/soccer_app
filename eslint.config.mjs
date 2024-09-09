import react from 'eslint-plugin-react';

export default [
    { files: ['**/*.{js,mjs,cjs,jsx}'] },
    {
        plugins: {
            react,
        },
        rules: {
            'react/prop-types': 0,
        },
    },
];
