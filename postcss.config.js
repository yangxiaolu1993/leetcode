module.exports = {
    plugins: {
      
      'postcss-px2rem': {
        rootValue: 37.5,
        propList: ['*'],
        exclude: /node_modules/
      }
    }
  }