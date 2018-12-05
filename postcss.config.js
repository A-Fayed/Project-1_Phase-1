module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-logical': {},
    'postcss-dir-pseudo-class': {},
    'postcss-cssnext': {},
    'postcss-nested': { bubble: ['container'] },
    'postcss-retina-bg-img': {
      retinaSuffix: '@2x'
    },
    // cssnano: {},
  }
};
