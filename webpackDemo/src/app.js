import base from './css/base.less';
import common from './css/common.less';


var app = document.getElementById("app");

console.log(app)
// console.log(base.box)
// app.innerHTML = '<div class="'+ base.box +'"></div>'


// import(/* webpackChunkName：'a' */'./components/a').then(function(a){
// 	console.log(a)
// })


import {a} from './common/util.js'
console.log(a())


import { chunk } from 'lodash'
console.log(chunk([1,2,3,4,5],2))


// base.use()
// base.unuse()


// var flag = false;

// setInterval(function(){
// 	if(flag){
// 		base.use()
// 	}else{
// 		base.unuse()
		
// 	}
// 	flag = !flag;
// },500)