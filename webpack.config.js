/* eslint import/no-extraneous-dependencies: ["error", { "devDependencies": true }], no-param-reassign: "off" */
const path = require('path');
const os = require('os');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const packageJson = require('./package.json');
const ResourceSplitterPlugin = require('@mobilex/webpack-resource-splitter-plugin');
const createMipConfig = require('@mobilex/webpack-config-mip');

// workaround for https://github.com/sass/node-sass/issues/857
// if webpack hangs, increase this number
process.env.UV_THREADPOOL_SIZE = 4;

module.exports = function getConfig(env = {}) {
  const inProductionMode = Boolean(env.production);
  const device = Boolean(env.device);
  const analyze = Boolean(env.analyze);
  const hot = Boolean(env.hot);

  const config = createMipConfig({
    inProductionMode,
    analyze,
    hot,

    getEntry() {
      return {
        code: './src/index',
      };
    },

    getOutput() {
      return {
        path: path.resolve(__dirname, 'www'),
        filename: '[name].js',
      };
    },

    getModuleRules(base) {
      return [
        ...base,
        {
          test: /\.mustache$/,
          loader: 'mustache-loader',
          options: { minify: inProductionMode },
        },
      ];
    },

    getResourceLoaders() {
      return [
        { loader: 'json-loader' },
        {
          loader: '@mobilex/resource-loader',
          options: {},
        },
      ];
    },

    getDevServer() {
      const hostname = os.hostname();
      const sandboxId = hostname.substring('sse-sandbox-'.length);
      return {
        stats: 'minimal',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods':
            'GET, POST, PUT, DELETE, PATCH, OPTIONS',
          'Access-Control-Allow-Headers': 'X-Requested-With, content-type',
        },
        public: sandboxId + '.sse.codesandbox.io',
      };
    },

    getPlugins(base) {
      return [
        ...base,
        new HtmlWebpackPlugin({
          template: './index.html.mustache',
          title: packageJson.name,
        }),
        new ResourceSplitterPlugin(
          ['locale'],
          packageJson.mobilex.localization.resourceLocales
        ),
      ];
    },

    getResolve(base) {
      const baseAlias = (base && base.alias) || {};
      const newAlias = {
        modernizr$: path.resolve(__dirname, '.modernizrrc.json'),
        LocalFrame: __dirname,
        ...(device ? {} : { '@mobilex/database': '@mobilex/database-local' }),
      };
      return {
        ...base,
        alias: {
          ...baseAlias,
          ...newAlias,
        },
      };
    },
  });

  return config;
};
