module.exports = {
  env: {
    es2021: true,
    'react-native/react-native': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react', 'react-native', '@typescript-eslint', 'prettier'],
  rules: {
    '@typescript-eslint/no-empty-function': 0,
    'prettier/prettier': 'error',
    'no-console': ['error', { allow: ['tron'] }],
    'import/extensions': 'off',
    'react-native/no-inline-styles': 2,
    'react-native/no-raw-text': 0,
    'react/display-name': 0,
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    'react/prop-types': 0,
  },
};
