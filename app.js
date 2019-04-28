const htmlStandards = require('reshape-standard')
const cssStandards = require('spike-css-standards')
const jsStandards = require('spike-js-standards')
const pageId = require('spike-page-id')

const postcssMixins = require('postcss-mixins')
const postcssColorFunc = require('postcss-color-mod-function')
const postcssCustomMedia = require('postcss-custom-media');

const env = process.env.SPIKE_ENV

module.exports = {
  devtool: 'source-map',
  matchers: { html: '*(**/)*.html', css: '*(**/)*.css', js: '*(**/)*.js' },
  ignore: ['**/layout.html', '**/_*', '**/.*', 'readme.md', 'yarn.lock', 'package-lock.json'],
  reshape: htmlStandards({
    locals: (ctx) => { return { pageId: pageId(ctx), foo: 'bar' } },
    minify: env === 'production'
  }),
  postcss: cssStandards({
    appendPlugins: [postcssMixins(), postcssColorFunc(), postcssCustomMedia()]
  }),
  babel: jsStandards()
}
