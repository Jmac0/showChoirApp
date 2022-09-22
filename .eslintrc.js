module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'react/jsx-props-no-spreading': 'off',

        'react/no-unused-prop-types': 'warn',
        'no-underscore-dangle': ['off', { allow: ['_'] }],
        'no-unused-vars': [
          1,
          { vars: 'all', args: 'all', argsIgnorePattern: '^_' },
        ],
        '@typescript-eslint/no-unused-vars': ['warn'],
      },
    },
  ],
};
