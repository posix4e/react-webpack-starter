// source -- https://github.com/webpack/react-starter

"use strict";

var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var loadersByExtension = require("./config/loadersByExtension");

module.exports = function(options) {
  var entry = {
    main: reactEntry("App")
  };

  var loaders = {
    "jsx": options.hotComponents ? ["react-hot-loader", "jsx-loader?harmony"] : "jsx-loader?harmony",
    "js|jsx": {
    loader: "babel-loader",
    include: path.join(__dirname, "app"),
    exclude: /node_modules/
    },
    "txt": "raw-loader",
    "png|jpg|jpeg|gif|svg": "url-loader?limit=10000",
    "woff": "url-loader?limit=100000",
    "ttf|eot": "file-loader",
    "html": "html-loader",
    "md|markdown": ["html-loader", "markdown-loader"]
  };

  var stylesheetLoaders = {
    "css": "css-loader",
    "sass": "css-loader!sass-loader",
    "less": "css-loader!less-loader",
    "styl": "css-loader!stylus-loader"
  };

  Object.keys(stylesheetLoaders).forEach(function(ext) {
    var loaders = stylesheetLoaders[ext];
    if(Array.isArray(loaders)) { loaders = loaders.join("!"); }
    if(options.prerender) {
      stylesheetLoaders[ext] = "null-loader";
    } else if(options.separateStylesheet) {
      stylesheetLoaders[ext] = ExtractTextPlugin.extract("style-loader", loaders);
    } else {
      stylesheetLoaders[ext] = "style-loader!" + loaders;
    }
  });

  var allLoaders = loadersByExtension(loaders).concat(loadersByExtension(stylesheetLoaders));

  var alias = {};

  var aliasLoader = {};

  var externals = [];

  var node = {};

  var modulesDirectories = ["web_modules", "node_modules"];

  var extensions = ["", ".web.js", ".js", ".jsx"];

  var root = path.join(__dirname, "app");

  var publicPath = options.devServer ? "http://localhost:2992/_assets/" : "/_assets/";

  var output = {
    path: path.join(__dirname, "build", options.prerender ? "prerender" : "public"),
    publicPath: publicPath,
    filename: "[name].js" + (options.longTermCaching && !options.prerender ? "?[chunkhash]" : ""),
    chunkFilename: (options.devServer ? "[id].js" : "[name].js") + (options.longTermCaching && !options.prerender ? "?[chunkhash]" : ""),
    sourceMapFilename: "debugging/[file].map",
    libraryTarget: options.prerender ? "commonjs2" : undefined,
    pathinfo: options.debug,
  };

  var excludeFromStats = [
    /node_modules[\\\/]react(-router)?[\\\/]/,
    /node_modules[\\\/]items-store[\\\/]/
  ];

  var plugins = [
    function() {
    if(!options.prerender) {
      this.plugin("done", function(stats) {
        var jsonStats = stats.toJson({
          chunkModules: true,
          exclude: excludeFromStats
        });
        jsonStats.publicPath = publicPath;
        require("fs").writeFileSync(path.join(__dirname, "build", "stats.json"), JSON.stringify(jsonStats));
      });
    }
  },
  new webpack.PrefetchPlugin("react"),
  new webpack.PrefetchPlugin("react/lib/ReactComponentBrowserEnvironment")
  ];

  if(options.prerender) {
    aliasLoader["react-proxy$"] = "react-proxy/unavailable";
    externals.push(
      /^react(\/.*)?$/,
      /^reflux(\/.*)?$/,
      "superagent",
      "async"
    );
    plugins.push(new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 }));
  }

  if(options.commonsChunk) {
    plugins.push(new webpack.optimize.CommonsChunkPlugin("commons", "commons.js" + (options.longTermCaching && !options.prerender ? "?[chunkhash]" : "")));
  }

  if(options.separateStylesheet && !options.prerender) {
    plugins.push(new ExtractTextPlugin("[name].css" + (options.longTermCaching ? "?[contenthash]" : "")));
  }

  if(options.minimize) {
    plugins.push(
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.optimize.DedupePlugin(),
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify("production")
        }
      }),
      new webpack.NoErrorsPlugin()
    );
  }

  function reactEntry(name) {
    return (options.prerender ? "./app/prerender?" : "./app/main?") + name;
  }

  if(options.bootstrap) {

    plugins.push(
     new webpack.ProvidePlugin({
       $: "jquery",
       "windows.jQuery": "jquery",
       jQuery: "jquery"
     })
    );

    allLoaders.push(
      { test: require.resolve("jquery"), loader: "imports?jQuery=jquery" }
    );
  }

  return {
    entry: entry,
    output: output,
    target: options.prerender ? "node" : "web",
    module: {
      loaders: loadersByExtension(loaders).concat(loadersByExtension(stylesheetLoaders))
    },
    devtool: options.devtool,
    debug: options.debug,
    resolveLoader: {
      root: path.join(__dirname, "node_modules"),
      alias: aliasLoader
    },
    externals: externals,
    resolve: {
      root: root,
      modulesDirectories: modulesDirectories,
      extensions: extensions,
      alias: alias,
    },
    plugins: plugins,
    node: node,
    devServer: {
      stats: {
        cached: false,
        exclude: excludeFromStats
      }
    }
  };

};
