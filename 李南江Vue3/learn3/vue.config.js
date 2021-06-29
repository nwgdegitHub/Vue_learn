module.exports = {
    //选项

    //=>修改webpack-dev-server配置（尤其是跨域代理）
    devServer: {
        disableHostCheck: true,
        proxy: {
//请求地址 /user/add
//代理地址 http://api.xxx.cn/user/add
            "/apis": {
                changeOrigin: true,
                target: "http://10.200.13.103:3000",

                pathRewrite: {
                    '^/apis': ''
                }
            }
        },
        port: 8082
    }
}
//http://10.200.13.103:8091/file/download/open/1/2021/5/7/13b9b4d1-99d2-4a6c-aba7-fad5bff19552.png
