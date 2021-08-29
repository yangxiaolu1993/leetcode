const path = require('path')
module.exports = {
    chainWebpack: (config) => {

    },
    configureWebpack: (config) => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
            config.mode = 'production'
        } else {
            // 为开发环境修改配置...
            config.mode = 'development'
        }
        Object.assign(config, {
            // 开发生产共同配置
            resolve: {
                alias: {
                    '@': path.resolve(__dirname, './src'),
                    '@p': path.resolve(__dirname, './src/components'),
                    '@s': path.resolve(__dirname, './src/assets/css')
                } // 别名配置
            }
        })
    }
}