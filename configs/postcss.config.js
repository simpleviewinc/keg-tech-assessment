module.exports = {
    plugins: {
        'postcss-preset-env': {
            // Removing color-adjust from postcss as it does not recognize it as a valid feature, hence to recommendations to use color-mix, etc
            features: {
                // 'color-adjust': false
            }
        },
        'autoprefixer': {
            overrideBrowserslist: ['last 2 versions', '> 1%'], // Ensure vendor prefixes for the last 2 versions of browsers
        },
        'cssnano': {
            preset: ['default', {
                discardUnused: false // Prevents optimizations that might include color-adjust
            }]
        }
    }
};