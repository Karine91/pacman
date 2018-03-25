import path from 'path'

export default {
    mode: "production",
    entry: {
        app: path.join(__dirname, '..', 'src/index.js')
    },
    output: {
        path: path.join(__dirname, '..', 'dist'),
        filename: 'js/[name].js'
    },
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [path.join(__dirname, '..', 'src')]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                include: [path.join(__dirname, '..', 'src/assets/img')],
                options: {
                  name: '[name].[ext]?[hash]'
                }
            },
        ]
    }
}