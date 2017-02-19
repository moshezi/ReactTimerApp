var webpack = require('webpack');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      applicationStyles: 'app/styles/app.scss',
      Navigation: 'app/components/Navigation.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {                                       //because there is jsx code in our app.jsx, webpack doesnt know how to handle jsx and es6 so we need the use the loaders in order to convert all of our jsx files to es5 that we use today(we use the babel-loader)
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']             //boble requires presets, it tell bable what to do) in this case we tell it to compile our code to react and es2015
        },
        test: /\.jsx?$/,                            //use regx to know witch files to get (we whant those with the jsx extensions) *the monay sign is to match it at the end of the file name
        exclude: /(node_module|bower_components)/  //witch folders we dont want to have parse (also use regx)
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
