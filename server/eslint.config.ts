export default [
  {
    files: ['src/**/*.{ts,tsx,js,jsx}'],
    ignores: ['src/public/**'],
    languageOptions: {
      parser: require('@typescript-eslint/parser'),
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
      prettier: require('eslint-plugin-prettier'),
    },
    rules: {
      semi: ['error', 'never'],
      'no-use-before-define': ['error', { functions: true, classes: true }],
      'prettier/prettier': 'error',
      'no-console': 'warn',
      'no-var': 'error',
      'prefer-const': 'error',
    },
  },
]
