module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
                "@babel/plugin-transform-runtime",
                "@babel/plugin-proposal-class-properties",
              ]
          }
        }
      }
    ]
  }
};