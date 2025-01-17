module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "quotes":["warn", "single"],
    //'jsx-quotes': ['error', 'prefer-single'], //deprecated
    "no-unused-vars": "off", // warning, not error
    "vitest/expect-expect": "off", // distracting red squiggles while writing tests
    "react/prop-types": "off", // turn off props validation
  },
}
