const path = require('path');

module.exports = {
   entry: path.resolve(__dirname, 'src', 'index.js'),
   output: {
      path: path.resolve(__dirname, 'output'),
      filename: 'bundle.js'
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
            test: /\.less/,
            use: ['style-loader', 'css-loader', 'less-loader']
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