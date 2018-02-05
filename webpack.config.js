const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'output'),
    filename: 'bundle.js',
    publicPath: "http://localhost:8080/output/"
  },
  resolve: {
    extensions: ['.js']
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.js/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['react', 'es2015'] }
        }
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader?insertAt=top',
          'css-loader?sourceMap&modules&importLoaders=1&localIdentName=[path][name]---[local]---[hash:base64:5]',
          'sass-loader?sourceMap',
      ],
      },
      {
        test: /\.less/,
        use: ['style-loader', 'css-loader&modules', 'less-loader']
      },
      {
        test: /\.css/,
        loader: 'style-loader!css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff&name=./[hash].[ext]"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      }

    ]
  },
  devServer: {
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    contentBase: './src',
    publicPath: '/output/'
  }
};