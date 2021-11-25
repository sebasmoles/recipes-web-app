
module.exports  = {
    devServer:{  // Unusable in production
         proxy: {
           '^/api': {
               target: 'https://recipes-api-project.herokuapp.com',
               changeOrigin: true,
               logLevel: 'debug',
               pathRewrite: { '^/api': '/' }
             }
         }
    }
}