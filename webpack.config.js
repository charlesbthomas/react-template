const path = require("path");
const HappyPack = require("happypack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, 'client'),
  mode: "production",
  entry: {
    app: [
      "./index.js"
    ],
    vendor: [
      'react',
      'react-dom',
      'styled-components'
    ]
  },
  optimization: {
    minimize: true
  },
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash].bundle.js",
    publicPath: "/",
    pathinfo: true,
    sourceMapFilename: '[chunkhash].[hash].js.map',
    chunkFilename: '[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader"
        },
        exclude: /(node_modules)/
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /themes\/.*\.css$/,
        use: [
          'css-loader'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|ico|webmanifest|xml)$/i,
        loaders: [
          {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[ext]',
              context: ''
            }
          }
        ]
      },
      {
        test: /\/sprite\/.*\.svg$/,
        loaders: [
          {
            loader: 'svg-sprite-loader',
            options: {
              extract: true,
              spriteFilename: 'img/icons-[hash:8].svg',
              runtimeCompat: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HappyPack({
      loaders: ["babel-loader"],
      debug: false,
      verbose: false
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: "index.html",
      filename: "index.html"
    })
  ]
};
