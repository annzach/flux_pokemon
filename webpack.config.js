module.exports ={
  //entry :give a path to index.js and its where the application begins
  //output: //where the output is and the file name 'bundle.js',
            // the webpack creates build directory if we dont create it.
  //loaders: Its an array of object
  //loader :babel-loader
  //test: a reg exp which defines how the file looks like /\.js$ 
   //search for all the files which ends with .js/ and 
   //.jsx?$ searches for both js and jsx.
   // query : {presets:[], to bundle the presets}.
   //It reads the actual js file for bundling and it uses the babel loader.
   //devtool :inline-source map..gives the error in original source code.
   //publicPath:'/build/' : for webpack-dev-server --no-info to reflect the changes, basically 
   //webpack-dev server creates the bundle in memory...it doesnt need the bundle.js
  entry:[
        'bootstrap-loader',
        './src/index.js',
        ],
  output:{path:'./build', publicPath:'/build/', filename:'bundle.js'},
  devtool:'inline-source-map',
  module:{
    loaders:[
      {
        loader: 'babel-loader',
        test:/\.jsx?$/,
        exclude: /node_modules/,
        query: {
          presets: ['es2015','react']
        }
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
      { test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
      { test:/bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/, loader: 'imports?jQuery=jquery' }
    ]
  }
}