module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        useBuiltIns: 'usage',
        corejs: '3',
        targets: {
          browsers: ['last 2 versions', '> 3% in JP'],
        },
      },
    ],
  ],
  plugins: ['@babel/plugin-syntax-dynamic-import'],
  env: {
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              node: 'current',
            },
          },
        ],
      ],
    },
  },
};
