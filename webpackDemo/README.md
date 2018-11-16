<!-- 安装依赖应该版本相对应 -->


1.在webpack使用es6
<!-- Babel -->
	npm install babel-loader@8.0.0-beta.0 @babel/core   //最新
	npm install --save-dev babel-loader babel-core

<!-- Babel Presets -->   //针对于语法
	规范-打包
	es2015
	es2016
	es2017
	env

	npm install @babel/preset-env --save-dev    //最新
	npm install babel-preset-env --save-dev

		Babel Presets中的targets
				targets

<!-- Babel Polyfill  垫片 -->		//针对于函数和方法，为开发应用而用的
	Generatorr
	Set
	Map
	Array.from

	全局的垫片
	为开发应用而用的
	安装：npm install babel-polyfill --save

	用法：import 'babel-polyfill' 




<!-- Babel Runtime Transform -->	//针对于函数和方法，为开发框架而应用的
	局部的垫片
	为开发框架应用的
	安装：
			npm install @babel/runtime --save
			npm install @babel/plugin-transfotm-runtime --save-dev

			npm install babel-plugin-transform-runtime --save-dev
		  	npm install babel-runtime --save
	用法：在项目根目录下安装.babelrc



2.在webpack中用typescript
	安装
	 	官方：npm install typescript ts-loader --save-dev
	 	第三方： npm install typescript awesome-typescript-loader --save-dev

	tsconfig.json


3.提取公用代码
	有点：a.减少代码冗余; b.提高下载速度
	CommonsChunkPlugin
		webpack.optimize.CommonsChunkPlugin\
	配置：
		{
			plugins:[
				new webpack.optimize.CommonsChunkPlugin({
					names 或者 name
					filename 公用代码打包的文件名
					minChunks  出现几次就打包
					chunks   指定代码范围
					children
					deepChildren
					async
				})
			]
		}
	场景： 	单页面应用
		  	单页面应用 + 第三方依赖
		  	单页面应用 + 第三方依赖 + webpack生成代码



<!-- 代码分割加懒加载 -->
webpack methods
	require.ensure
		参数
		[]: dependences
		callback
		errCallback
		chunkName

	require.include
		参数

es 2015 loader Spec

System.import() -> import()

import() -> Promise
import().then()

webpack import function
import(
	/* webpackChunkName:async-chunk-name */
)

代码分割 -- 应用场景
	分离业务代码和第三方依赖
	分离业务代码 和 业务公共代码 和 第三方依赖
	分离首次加载和访问加载后的代码
	



<!-- 处理css -->
CSS modules
配置 less / sass
提取 CSS代码

为什么要提取css代码 -- 为了加速有缓存。
	
	style-loader					//往tml页面中插入style标签
		安装  npm install style-loader  --save-dev
			  npm install css-loader --save-dev		

		配置：use: [
					{
						loader: 'style-loader'
					},{
						loader: 'css-loader'
					}
				]


	style-loader/url				//往html页面中插入link标签	
		安装   npm install file-loader --save-dev 

		配置：use: [
					{
						loader: 'style-loader/url'
					},{
						loader: 'file-loader'
					}
				]

	style-loader/useable
		配置：use: [
					{
						loader: 'style-loader/useable'
					},{
						loader: 'css-loader'
					}
				]

		引用： import base from './css/base.css';
				import common from './css/common.css';


				base.use()
				base.unuse()


				var flag = false;

				setInterval(function(){
					if(flag){
						base.use()
					}else{
						base.unuse()
						
					}
					flag = !flag;
				},500)
style-Loader
	options
		insertAt(插入位置)
		insertInto(插入到DOM)
		singleton(是否只是用一个style标签)
		transform(转化，浏览器环境下，插入也面前)		

css-loader      为了在js可以引入 import css
	options
		alias (解析的别名)
		importLoader(@import)
		Minimize(是否压缩)
		modules(启用css-modules)

	:local    给一个本地的样式
	:global   给一个全局的样式
	compose	  继承一个样式
	compose 。。。 from path   引用一段样式


Less/Sass
	安装： npm install less-loader less --save-dev
		npm install sass-loader node-sass --dave-dev



<!-- 提取css文件方式 -->
	extract-loader
	ExtractTexrWebpackPlugin
		安装 npm install extract-text-webpack-plugin --save-dev




<!-- PostCss -->
PostCss				处理css的插件
	AitoPrefixer
	CSS-nato
	CSS-next

	安装 postcss  post-loader  Autoperfixer  postcss-cssnano postcss-cssnext

	Autoprefixer   帮助各个浏览器加上前缀
		a{                                        a{
			display:flex;							display： -webkit-box；
		}										}

	css-nano 帮助优化压缩css的、

	css-next 用未来的新语法

	npm install postcss postcss-loader autoprefixer cssnano postcss-cssnext --save-dev


Tree Shaking  摇树--把项目中的文件 不用的删掉
	js Tree Shaking
	css Tree Shaking

使用场景
	常规优化
	引入第三方库的某一个功能

JS Tree Shaking
	Webpack.optimize.


CSS Tree Shaking
	Purify CSS
	purifycss-webpack

	options
		paths:glob.sync([])

	安装插件
		npm install purifycss-webpack --save-dev
		npm install glob-all --save-dev






在webpack中文件处理
	图片处理
	字体文件处理
	第三方js库
