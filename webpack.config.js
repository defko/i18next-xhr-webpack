module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './',
    port: 3001
  },
  output: {
    filename: 'main.js'
  }
}