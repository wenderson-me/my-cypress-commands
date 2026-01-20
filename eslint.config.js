const js = require('@eslint/js')
const cypress = require('eslint-plugin-cypress')

module.exports = [
  js.configs.recommended,
  {
    files: ['src/**/*.js', 'cypress/**/*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...cypress.environments.globals.globals
      }
    },
    plugins: {
      cypress
    },
    rules: {
      'indent': ['error', 2],
      'quotes': ['error', 'single'],
      'semi': ['error', 'never'],
      'no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
      'no-console': 'warn',
      'cypress/no-assigning-return-values': 'error',
      'cypress/no-unnecessary-waiting': 'error',
      'cypress/assertion-before-screenshot': 'warn',
      'cypress/no-force': 'warn',
      'cypress/no-async-tests': 'error',
      'cypress/no-pause': 'error'
    }
  },
  {
    files: ['cypress/**/*.js'],
    rules: {
      'no-unused-expressions': 'off'
    }
  },
  {
    ignores: [
      'node_modules/',
      'dist/',
      'build/',
      'coverage/',
      '*.log',
      '.DS_Store',
      '.vscode/',
      '.idea/',
      'cypress/videos/',
      'cypress/screenshots/'
    ]
  }
]