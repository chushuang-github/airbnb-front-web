// craco.config.js配置文件
const CracoLessPlugin = require('craco-less');
const path = require('path');
const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
  // react里面默认集成了scss，但是less没有默认集成
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {},
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  webpack: {
    // 配置路径别名
    alias: {
      '@': resolve("src"),
      'components': resolve("src/components"),
      'utils': resolve("src/utils")
    }
  }
}