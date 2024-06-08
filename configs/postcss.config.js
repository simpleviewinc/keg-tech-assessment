module.exports = {
  plugins: {
    'postcss-preset-env': {
      features: {},
    },
    cssnano: {
      preset: [
        'default',
        {
          discardUnused: false, // Prevents optimizations that might include color-adjust
        },
      ],
    },
  },
}
