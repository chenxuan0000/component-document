var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  entry: {
    main: './src/main',
    vendors: ['vue', 'vue-router', 'iview', 'highlightjs/highlight.pack.js', 'clipboard']
  },
  output: {
    path: path.join(__dirname, './dist')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              loaders: {
                sass: ExtractTextPlugin.extract({
                  use: ['css-loader?minimize', 'autoprefixer-loader', 'sass-loader'],
                  fallback: 'vue-style-loader'
                }),
                scss: ExtractTextPlugin.extract({
                  use: ['css-loader?minimize', 'autoprefixer-loader', 'sass-loader'],
                  fallback: 'vue-style-loader'
                })
              },
              postLoaders: {
                html: 'babel-loader'
              }
            }
          },
          {
            loader: 'iview-loader',
            options: {
              prefix: false
            }
          }
        ]
      },
      {
        test: /iview\/.*?js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          //生产环境忽略了10k以上图片背景图的路径问题，出现404
          publicPath: '../', // 注意配置这一部分，根据目录结构自由调整
          use: 'css-loader?minimize',
          fallback: 'style-loader'
        })
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader?sourceMap'
        ]
      },
      {
        test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
        loader: 'url-loader?limit=10240'
      },
      {
        test: /\.(html|tpl)$/,
        loader: 'html-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'hljs': 'highlightjs/highlight.pack.js',
      'views': resolve('src/views'),
      'libs': resolve('src/libs')
    }
  }
};