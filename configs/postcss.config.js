module.exports = {
    plugins: {
        // 'postcss-preset-env': {
        //     features: {
        //         'color-adjust': false
        //     }
        // },
        'cssnano': {
            preset: ['default', {
                discardUnused: false // Prevents optimizations that might include color-adjust
            }]
        }
    }
};