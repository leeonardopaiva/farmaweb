module.exports = {
  pages: {
    index: {
      entry: 'src/pages/home/main.js',
      template: 'public/index.html',
      //filename: 'index.html',
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Home',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    login: {
      entry: 'src/pages/login/main.js',
      
    },
    cadastros: {
      entry: 'src/pages/cadastros/main.js',
      
    }
  }
}