module.exports = {
    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.(js|jsx)$/,
            exclude: [
                /node_modules/
            ],
            enforce: 'pre',
            use: [{
                loader: 'eslint-loader', options: {
                    fix: true,
                    failOnError: true,
                    configFile: './.eslintrc'
                }
            }],
        });
        return config;
    }
}