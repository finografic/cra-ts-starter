module.exports = {
  env: {
    browser: true,
    es2021: true, 
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended', 
    'plugin:jest/recommended', 
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
    'jest',
    'import',
    '@emotion',
  ],
  settings: {
    'import/resolver': {
      'import/parsers': {
        '@typescript-eslint/parser': [ '.ts', '.tsx' ],
      },
      node: {
        moduleDirectory: [ 'node_modules', 'src' ],
        extensions: [ '.js', '.jsx' ],
      },
      react: {
        pragma: 'React',
        version: 'detect',
      },
      'typescript': {
        'project': '.',
        'alwaysTryTypes': true,
      },
      'linkComponents': [ 'Hyperlink', { name: 'Link', 'linkAttribute': 'to' }],
    },
  },
  rules: {
    '@typescript-eslint/no-unused-vars': [
      0,
      {
        'vars': 'all',
        'args': 'all',
        'varsIgnorePattern': '^jsx$',
        'argsIgnorePattern': '[Ii]gnored$',
      },
    ],
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@emotion/pkg-renaming': 'error',
    'array-bracket-newline': [ 'warn', { 'multiline': true }],
    'array-bracket-spacing': [
      'error',
      'always',
      {
        'singleValue': false,
        'objectsInArrays': false,
        'arraysInArrays': false,
      },
    ],
    'array-element-newline': [ 'warn', { 'multiline': true, 'minItems': 3 }],
    'comma-dangle': [
      'warn',
      {
        'arrays': 'always-multiline',
        'objects': 'always-multiline',
        'imports': 'never',
        'exports': 'never',
        'functions': 'never',
      },
    ],
    'import/order': 0,
    'import/imports-first': 2,
    'import/newline-after-import': 0,
    'import/no-dynamic-require': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,
    'import/no-unresolved': 0,
    'import/no-webpack-loader-syntax': 0,
    'import/prefer-default-export': 0,
    'import/no-cycle': 0,
    'indent': [
      'error',
      2,
      { 'SwitchCase': 1 },
    ], // HUH ?? NOT WORKING 😡
    'linebreak-style': [ 'error', 'unix' ],
    'max-len': [
      'warn',
      {
        'code': 110,
        'tabWidth': 2,
        'ignoreTrailingComments': true,
        'ignoreUrls': true,
        'ignoreStrings': true,
        'ignoreTemplateLiterals': true,
        'ignoreRegExpLiterals': true,
      },
    ],
    'no-unused-vars': 0,
    'no-undef': 1,
    'object-curly-spacing': [
      'error',
      'always',
      {
        'arraysInObjects': false,
        'objectsInObjects': false,
      },
    ],
    'object-property-newline': [
      'error',
      {
        'allowAllPropertiesOnSameLine': true,
      },
    ],
    'semi': 2,
    'spaced-comment': 1,
    'quotes': [
      'error',
      'single',
      { 'avoidEscape': true },
    ],
    'react/display-name': 0,
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  /*
  'overrides': [
    {
      // enable the rule specifically for TypeScript files
      'files': [ '*.ts', '*.tsx' ],
      'rules': {
        '@typescript-eslint/explicit-module-boundary-types': ['warn'],
      },
    },
  ],
  */
};
