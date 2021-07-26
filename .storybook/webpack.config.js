module.exports = async ({ config }) => {
    const fileLoaderRule = config.module.rules.find(rule => rule.test.test('.svg'));
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!',fileLoaderRule)
    fileLoaderRule.exclude = /\.svg$/;
    config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack", "url-loader"],
    });
    return config;
};
