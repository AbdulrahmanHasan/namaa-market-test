// const path = require('path');
// const PrerenderSPAPlugin = require('prerender-spa-plugin');
// // var HtmlWebpackPlugin = require('html-webpack-plugin');
// const Renderer = PrerenderSpaPlugin.PuppeteerRenderer

// const PrerenderSpaPlugin = require("prerender-spa-plugin");
// const Renderer = PrerenderSpaPlugin.PuppeteerRenderer
const path = require("path");

module.exports = {
  configureWebpack: {
    plugins: [
        // new HtmlWebpackPlugin({
        //     // template: 'public/index.html',
        //     template: 'src/main.js',
        //     inject: true,
        //     API_URL_TEMPLATE_VAR: '<%= process.env.API_URL %>',
        // }),
        // new PrerenderSpaPlugin({
        //     staticDir: path.join(__dirname, 'dist'),
        //     routes: ['/'],
        //     renderer: new Renderer({
        //       timeout: 0,
        //       maxConcurrentRoutes: 1,
        //       renderAfterTime: 5000,
        //       headless: false
        //   })
        //   }),
    ],
},
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true,
      includeLocales: false,
      enableBridge: true
    }
  }
}
