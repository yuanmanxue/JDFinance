/**
 * @Author: yuanmanxue
 * @Date:   2018-01-16 09:34:40
 * @Last modified by:   yuanmanxue
 * @Last modified time: 2018-02-23 05:30:44
 */

const path = require('path');
const webpack = require('webpack');
// 多个webpack入口点，他们都会在生成的HTML文件中的script标签内，提取css文件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 清除重复的文件
const CleanWebpackPlugin = require('clean-webpack-plugin');
// 使用 extract-text-webpack-plugin就可以把css从js中独立抽离出来
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// 压缩js文件
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
module.exports = env => {
  // 命令行参数  webpack --port 900 参数
  if (!env) {
    env = {}
  }
  let plugins=[
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({template: './app/views/index.html'}),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ];
  if(env.production){
    plugins.push(
      // 创建一个在编译的时候可以配置的全局变量，可以判断是在生产环境还是在开发环境
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'
        }
      }),
      new ExtractTextPlugin("style.css", {ignoreOrder: true}),
      new UglifyJSPlugin({
          sourceMap: true
      })
    )
  }
  return {
    // 入口文件  多个的话是数组结构
    entry: ['./app/js/viewport.js','./app/js/main.js'],
    devtool: 'source-map',
    devServer: {
      contentBase: './dist',
      hot: true,
      compress: true,
      port: 9000,
      clientLogLevel: "none",
      quiet: true
    },
    module: {
      loaders: [
        {
          test: /\.html$/,
          loader: 'html-loader'
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            cssModules: {
              localIdentName: '[path][name]---[local]---[hash:base64:5]',
              camelCase: true
            },
            extractCSS: true,
            loaders: env.production?{
              css: ExtractTextPlugin.extract({use: 'css-loader?minimize!px2rem-loader?remUnit=40&remPrecision=8', fallback: 'vue-style-loader'}),
              scss: ExtractTextPlugin.extract({use: 'css-loader?minimize!px2rem-loader?remUnit=40&remPrecision=8!sass-loader', fallback: 'vue-style-loader'})
            }:{
              css: 'vue-style-loader!css-loader!px2rem-loader?remUnit=40&remPrecision=8',
              scss: 'vue-style-loader!css-loader!px2rem-loader?remUnit=40&remPrecision=8!sass-loader'
            }
          }
        },
        {
          test: /\.scss$/,
          loader: 'style-loader!css-loader!sass-loader'
        },
        {
            test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
            loader: 'url-loader'
        },
        {
            test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
            loader: 'file-loader',
            query: {
                name: '[name].[ext]?[hash]'
            }
        },
        {
          test   : /\.css$/,
          loader : 'style-loader!css-loader'
        },
      ]
    },
    resolve: {
      extensions: [
        '.js', '.vue', '.json'
      ],
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    },
    plugins,
    output: {
      filename: '[name].min.js',
      path: path.resolve(__dirname, 'dist')
    }
  }
};
