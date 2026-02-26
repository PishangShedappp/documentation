module.exports = function tailwindPlugin(context, options) {
    return {
        name: "tailwind-plugin",
        configurePostCss(postcssOptions) {
            postcssOptions.plugins = postcssOptions.plugins || [];
            postcssOptions.plugins.push(require("@tailwindcss/postcss"));
            return postcssOptions;
        },
    };
};