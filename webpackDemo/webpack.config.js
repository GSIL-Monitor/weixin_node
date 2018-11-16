var webpack = require("webpack")
var path = require("path");
var Purifycss = require("purifycss-webpack");
var glob = require("glob-all");
var ExtractTextWebpackPlugin = require("extract-text-webpack-plugin")



module.exports = {
	entry: {
		// 'pageA': './src/pageA',
		// 'pageB': './src/pageB',
		// 'vendor': ['lodash']
		app: './src/app.js'
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: './dist/',
		filename: '[name].bundle.js',
		chunkFilename: '[name].chunk.js'    //输出动态打包的文件
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				// use: 'babel-loader',
				use: {
					loader: 'babel-loader',
					options:{
						// presets: [
						// 	['@babel/preset-env',{
						// 		targets:{
						// 			browsers: ['> 1%','last 2 versions'],
						// 			// chrome: "52"
						// 		}
						// 	}]
						// ]
						presets: [
							[
								'@babel/preset-env',
								{
									targets:{
										browsers: ['> 1%','last 2 versions'],
										// chrome: "52"
									}
								}
							]
						],
						plugins:['lodash']
					}
				},
				//排除规则之外的
				exclude: '/node_modules',
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader',
						options:{
							//insertInto: '#app',			//插到指定位置
							singleton: true,			//把style合并唯一
							transform: './css.transform.js'
						}
					},{
						loader: 'css-loader',
						options:{
							minimize: true,
							modules: true,			//模块化
							localIdentName: '[path][name]_[local]_[hsah:base64:5]'
						}
					}
				]
			},
			{
				test: /\.less$/,
				use: ExtractTextWebpackPlugin.extract({
					fallback: {
						loader: 'style-loader',
						options:{
							//insertInto: '#app',			//插到指定位置
							singleton: true,			//把style合并唯一
							transform: './css.transform.js'
						}
					},
					use: [
						{
							loader: 'css-loader',
							options:{
								minimize: true,
								modules: true,			//模块化
								localIdentName: '[path][name]_[local]_[hsah:base64:5]'
							}
						},
						{
							loader: 'postcss-loader',
							options:{
								ident: 'postcss',
								plugins: [
									require('autoprefixer')(),
									require('postcss-cssnext')(),

								]
							}
						},
						{
							loader: 'less-loader'
						}
					]
				})
			}
		]
	},
	plugins: [
		// new webpack.optimize.CommonsChunkPlugin({
		// 	// name: 'common',
		// 	// minChunks: 2
		// 	name: 'common',
		// 	minChunks: 2,
		// 	chunks: ['pageB','pageB']
		// }),
		// new webpack.optimize.CommonsChunkPlugin({
		// 	async: 'async-commom',
		// 	children: true,
		// 	minChunks: 2
		// }),
		// new webpack.optimize.CommonsChunkPlugin({
		// 	names: ['vendor','mainfest'],
		// 	minChunks: Infinity
		// }),

		

		//移除没有用的文件
		new webpack.optimize.UglifyJsPlugin(),
		new Purifycss({
			paths: glob.sync([
				path.join(__dirname,'*.html'),
				path.join(__dirname,'./src/*.js')
			])
		}),
		//提取公用的css代码
		new ExtractTextWebpackPlugin({
			filename: '[name].min.css',
			allChunks: true			//默认是false，给插件提取一个范围
		}),


	]
}