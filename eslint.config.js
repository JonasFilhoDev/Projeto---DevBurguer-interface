import js from '@eslint/js'
import react from 'eslint-plugin-react'

export default [
    js.configs.recommended,
    react.configs.flat.recommended,
    {
        files: ['**/*.{js,jsx}'],
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: 'module',
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            },
            globals: {
                window: 'readonly',
                document: 'readonly',
                console: 'readonly',
                process: 'readonly',
                setTimeout: 'readonly',
                FormData: 'readonly'
            }
        },
        rules: {
            'no-unused-vars': 'warn',
            'react/react-in-jsx-scope': 'off'
        }
    }
]