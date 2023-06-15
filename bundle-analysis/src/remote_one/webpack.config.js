const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require('webpack').container;

const packageJson = require('./package.json')

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: "/src/index.jsx",
  output: {
    path: path.resolve(__dirname, "build"),
  },
  devServer: {
    port: 3001,
  },
  module: {
    rules: [
      {
        test: /\.?js(x)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-env"],
              [
                "@babel/preset-react",
                {
                  runtime: "automatic",
                  development: true
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["", ".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new ModuleFederationPlugin({
      name: "remote_one",
      exposes: {
        '.': './src/app.jsx',
      },
      remotes: {
        'hub': 'hub@http://localhost:3003/hub.js',
      },
      shared: {
        ...packageJson.dependencies,
        react: {
          singleton: true,
          requiredVersion: packageJson.dependencies.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: packageJson.dependencies["react-dom"],
        },
      },
    }),
  ],
};
