const HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
    mode : 'development',
    entry : './src/index.js',
    output :{
        path : __dirname + '/build',
        filename : 'index.js'
    },
    resolve : {
        extensions :['.js', '.jsx']
    },
    module : {
        rules:[
            {
                test: /\.(js|jsx)$/, use : ['babel-loader']
            },
            {
                test : /\.html$/, use: ['html-loader']
            },
            {
                test : /\.(c|sa|sc)ss$/, use : ['style-loader','css-loader']
            }
        ]
    },
    plugins :[
        new HtmlWebpackPlugin({
            template : './src/index.html',
            filename : 'index.html'
        })
    ],
    devServer:{
        open : true
    }

}