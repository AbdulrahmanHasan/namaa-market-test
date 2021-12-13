const path = require("path");
const PrerenderSpaPlugin = require("prerender-spa-plugin");
// const HtmlWebpackPlugin  = require('html-webpack-plugin')
let Renderer = PrerenderSpaPlugin.PuppeteerRenderer

module.exports = {
  configureWebpack: {
    plugins: process.env.NODE_ENV === 'production' ? [
        // new HtmlWebpackPlugin({
        //     template: 'public/index.html',
        //     // template: 'src/main.js',
        //     inject: true,
        //     API_URL_TEMPLATE_VAR: '<%= process.env.API_URL %>',
        // }),
        new PrerenderSpaPlugin({
            staticDir: path.join(__dirname, 'dist'),
            routes: ['/', '/Product-Detils/:id'],
              renderer: new Renderer({
                timeout: 0,
                maxConcurrentRoutes: 1,
                renderAfterTime: 5000,
                headless: false
            })
          }),
    ]: []
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
