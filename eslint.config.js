import antfu from '@antfu/eslint-config'

export default antfu(
  {
    astro: true,
    html: true,
    lessOpinionated: true,
    react: true,
    stylistic: false,
    typescript: {
      tsconfigPath: 'tsconfig.json',
    },
    vue: true,
    yml: true,
  },

  [
    {
      files: ['**/*.?([cm])[jt]s?(x)', '*.astro', '*.vue'],
      rules: {
        'import/order': [
          'error',
          {
            alphabetize: {
              caseInsensitive: true,
              order: 'asc',
            },
            groups: [
              'builtin',
              'external',
              'internal',
              'sibling',
              'parent',
              'index',
              'object',
              'type',
            ],
            'newlines-between': 'always',
          },
        ],
        'perfectionist/sort-array-includes': 'error',
        'perfectionist/sort-enums': 'error',
        'perfectionist/sort-interfaces': 'error',
        'perfectionist/sort-jsx-props': 'error',
        'perfectionist/sort-maps': 'error',
        'perfectionist/sort-object-types': 'error',
        'perfectionist/sort-objects': 'error',
        'perfectionist/sort-sets': 'error',
        'perfectionist/sort-switch-case': 'error',
        'perfectionist/sort-union-types': 'error',
        'ts/consistent-type-exports': [
          'error',
          { fixMixedExportsWithInlineTypeSpecifier: false },
        ],
        'ts/consistent-type-imports': [
          'error',
          {
            fixStyle: 'separate-type-imports',
            prefer: 'type-imports',
          },
        ],
      },
    },
  ]
)
