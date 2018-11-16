import './subPageA';
import './subPageB';

import * as _ from 'lodash';

var page = 'subPageB'

if(page === 'subPageA'){
	import(/* webpackChunkName: 'subPageA' */'./subPageA').then(function(subPageA){
		console.log(subPageA)
	})	
}else if(page ==='subPageB'){
	import(/* webpackChunkName: 'subPageA' */'./subPageB').then(function(subPageB){
		console.log(subPageB)
	})		
}

export default 'pageB';