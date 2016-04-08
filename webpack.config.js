// https://github.com/webpack/docs/wiki/usage-with-bower

var path = require("path");
var webpack = require("webpack");

var config = {
    entry: [
        "./src/app.js"
    ],
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },
    resolve: {
        modulesDirectories: ["node_modules", "bower_components"]
    },
    plugins: [
        new webpack.ResolverPlugin([
            // Each bower component package has its own .bower.json file, and
            // the "main" field specifies the location of the distribution
            // file to use.
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(".bower.json", ["main", ["main", 0]])
        ], ["normal", "loader"])
    ]
};

module.exports = config;
