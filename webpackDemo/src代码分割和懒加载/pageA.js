// import './subPageA';
// import './subPageB';


import * as _ from 'lodash';

// require.include('./moduleA')

var page = "subPageA"

// require.ensure
// if(page === 'subPageA'){
// 	require.ensure(['./subPageA'],function(){
// 		var subPageA = require('./subPageA')
// 	},'subPageA')	
// }else if(page ==='subPageB'){
// 	require.ensure(['./subPageB'],function(){
// 		var subPageB = require('./subPageB')
// 	},'subPageB')	
// }
	

// 动态加载
if(page === 'subPageA'){
	import(/* webpackChunkName: 'subPageA' */'./subPageA').then(function(subPageA){
		console.log(subPageA)
	})	
}else if(page ==='subPageB'){
	import(/* webpackChunkName: 'subPageB' */'./subPageB').then(function(subPageB){
		console.log(subPageA)
	})		
}



// if(page === 'subPageA'){
// 	import('./subPageA').then(function(subPageA){
// 		console.log(subPageA)
// 	})	
// }else if(page ==='subPageB'){
// 	import('./subPageB').then(function(subPageA){
// 		console.log('subPageB')
// 	})		
// }





// import * as _ from 'lodash';


//代码分割  -- yibu 
// require.ensure(['lodash'],function(){
// 	var _ = require('lodash')
// 	_.join(['1','2'],'3')
// },'vendor')


export default 'pageA';