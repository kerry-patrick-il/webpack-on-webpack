const path = require("path");

const config = {
  entry: "./src/index.ts", //the point of entry for the TS/JS code
  output: {
    path: path.resolve(__dirname, "build"), //to a directory off the root named build
    filename: "index.js", //with bundled JS files named like this
    clean: true, //clean the build directory before building
    globalObject: "this",
    publicPath: "", 
    //SHHHHHH! this is a library!
    library: {
      name: "the_library",
      type: "umd" //universal donor
    }
  },
  //declaring react and react-dom as externals prevents react hook errors from having two sets of react code: the bundled version and the version of the consumer
  // see https://robkendal.co.uk/blog/2019-12-22-solving-react-hooks-invalid-hook-call-warning/
  externals: {
    react: "react",
    "react-dom": "react-dom"
  },
  mode: "production", //set the mode to production to default to an optimized build
  module: {
    rules: [
      ///use ts-loader to transpile TS files, excluding node_modules, test files, mocks, and cypress, so we can get type declarations
      {
        test: /\.(ts|tsx)$/,
        use: {
          loader: "ts-loader",
          options: {
            configFile: path.resolve(__dirname, "tsconfig.json")
          }
        },
        exclude: [/node_modules/]
      },
      //use webpack 5 asset modules to copy image files
      {
        test: /\.(png|svg|jpg)$/,
        type: "asset/resource",
        generator: {
          filename: "static/media/[name].[contenthash][ext]"
        }
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
    modules: ["node_modules", path.resolve(__dirname, "src")] //if it can't find a module in node_modules, look in the src folder instead
  },
  devtool: "source-map"
};

if (process.env.NODE_ENV === "development") {
  config.mode = "development";
}

module.exports = config;
