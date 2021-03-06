// Vue CLI 3.0
module.exports = {
  chainWebpack: config => {
    config.module
      .rule("i18n")
      .resourceQuery(/blockType=i18n/)
      .type("javascript/auto")
      .use("i18n")
      .loader("@kazupon/vue-i18n-loader")
      .end()
      .use("yaml")
      .loader("yaml-loader")
      .end();
  },
  publicPath: process.env.NODE_ENV === "production" ? "/climate-tft/" : "/",
  outputDir: "docs"
};
