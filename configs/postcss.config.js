module.exports = {
  plugins: {
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
