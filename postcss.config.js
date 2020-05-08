//TODO: remove unnecessary libs
module.exports = {
  plugins: {
    // 'postcss-cssnext': {
    //   features: {
    //     customProperties: {
    //       warnings: false,
    //     },
    //   },
    // },
    autoprefixer: {},
    // cssnano: process.env.NODE_ENV === 'production' ? {} : false,
    'postcss-preset-env': {
      features: {
        'nesting-rules': true,
        'custom-properties': true,
        'custom-media-queries': true,
      },
    },
  },
};
