
var isDeploy = isInArgs('--deploy');

var join = require('path').join;
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var commonPlagins = [
  new webpack.DefinePlugin({
    'ENV_isDeploy': JSON.stringify(isDeploy)
  }),
  new CopyWebpackPlugin([{
    to: 'vendors/',
    from: 'vendors/',
    context: join(__dirname + '/front/')
  }])
];

var devPlagins = [];

var deployPlagins = [
  new webpack.optimize.UglifyJsPlugin({
    mangle: {
      except: [ 
        '$http', '$scope', '$stateProvider', '$location',
        '$urlRouterProvider', '$locationProvider', '$state',
        '$servApi',
      ] 
    },
    compress: {
      warnings: false,
      drop_console: true,
    }
  })
];

module.exports = {
  entry: [
    join(__dirname, '/front/app.js')
  ],
  output: {
    filename: 'app.js',
    path: join(__dirname, '/build/'),
    publicPath: '/'
  },

  module: {
    loaders: [{
      test: /\.(js)?$/,
      loader: 'babel',
      include: join(__dirname, '/front/'),
      query: {
        presets: [ 'es2015' ]
      }
    }, {
      test: /\.(styl|css)?$/,
      loader: 'style!css!stylus',
    }, {
      test: /\.(html)?$/,
      loader: 'file',
      include: join(__dirname, '/front/'),
      query: {
        name: 'views/[hash].[ext]'
      }
    }, {
      test: /\.(png|jpg|gif)?$/,
      loader: 'file',
      query: {
        name: 'images/[hash].[ext]'
      }
    }]
  },

  plugins: isDeploy ? commonPlagins.concat(deployPlagins) : commonPlagins.concat(devPlagins)

};

function isInArgs(str) {
  return (process.argv.indexOf(str) > -1);
}
