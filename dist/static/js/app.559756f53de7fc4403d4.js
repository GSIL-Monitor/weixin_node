webpackJsonp([1],{"/J4u":function(n,t){},IKr1:function(n,t){},MPzD:function(n,t){},NHnr:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e("7+uW"),o=e("//Fk"),i=e.n(o),s=e("Xxa5"),a=e.n(s),c=e("exGp"),l=e.n(c),u=e("OEdS"),h=e.n(u),d={name:"Editor",props:["code"],computed:{highlightedCode:function(){return h.a.highlight(this.code,h.a.languages.css)},codeInStyleTag:function(){return"<style>"+this.code+"</style>"}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5}}},m={render:function(){var n=this.$createElement,t=this._self._c||n;return t("div",{ref:"container",staticClass:"styleEditor"},[t("div",{staticClass:"code",domProps:{innerHTML:this._s(this.codeInStyleTag)}}),this._v(" "),t("pre",{domProps:{innerHTML:this._s(this.highlightedCode)}})])},staticRenderFns:[]};var p=e("VU/8")(d,m,!1,function(n){e("jIxe")},"data-v-0618924a",null).exports,g=e("EFqf"),w=e.n(g),f={props:["markdown","enableHtml"],name:"ResumeEditor",computed:{result:function(){return this.enableHtml?w()(this.markdown):this.markdown}},methods:{goBottom:function(){},goTop:function(){}}},k={render:function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"resumeEditor"},[this.enableHtml?t("div",{domProps:{innerHTML:this._s(this.result)}}):t("pre",[this._v(this._s(this.result))])])},staticRenderFns:[]};var v=e("VU/8")(f,k,!1,function(n){e("/J4u")},"data-v-4dbc42f9",null).exports,b=(e("MPzD"),{name:"app",components:{StyleEditor:p,ResumeEditor:v},data:function(){return{interval:5,currentStyle:"",enableHtml:!1,fullStyle:['/*\n* 大家好，我是宋康乐。\n* 我来写一份简历！\n*/\n\n/* 给所有元素加上过渡效果 */\n* {\n  transition: all .1s;\n}\n/* 设置背景颜色 */\nhtml {\n  background: url("https://songkangle.github.io/weixin_node/timg.jpg") no-repeat center center;\n  background-size: cover;\n}\n#content{\n  height:70vh;\n  margin:0;\n}\n#foot{\n  height:29vh;\n  margin:0;\n}\n\n/* 设置边框 */\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  margin: .5em;\n  overflow: auto;\n  width: 50vw; height: 70vh;\n  background: rgb(20,20,20);\n}\n/* 代码高亮 */\n.token.selector{ color: rgb(130,150,0); }\n.token.property{ color: rgb(190,140,0); }\n.token.punctuation{ color: yellow; }\n.token.function{ color: rgb(40,160,150); }\n\n/* 加3D效果 */\nhtml{\n  perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; left: 0; top: 0;\n  -webkit-transition: none;\n  transition: none;\n  -webkit-transform: rotateY(10deg) translateZ(-100px) ;\n          transform: rotateY(10deg) translateZ(-100px) ;\n}\n\n/* 准备一个编辑器 */\n.resumeEditor{\n  position: fixed; right: 0; top: 0;\n  padding: .5em;  margin: .5em;\n  width: 50vw; height: 70vh;\n  border: 1px solid;\n  background: rgb(200,200,200); color: #222;\n  overflow: auto;\n  -webkit-transition: none;\n  transition: none;\n  -webkit-transform: rotateY(-10deg) translateZ(-100px) ;\n          transform: rotateY(-10deg) translateZ(-100px) ;\n}\n/* 开始写简历 */\n','\n/*将Markdown格式翻译成HTML\n *再对HTML加点样式\n*/\n.resumeEditor{\n  padding: 2em;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;\n  content: counters(section, ".") " ";\n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n',"/* 写封感谢信。\n * 感谢大家对我的关注。\n */\n.styleEditor{\n    width:50vw;height:70vh;\n}\n\n.resumeEditor{\n   width:50vw;height:70vh;\n}\n\n.thankEditor{\n  position: relative; left: 0; top: 0;\n  background: #E9D9BB;\n  color: #001C42;\n  overflow: auto;\n}\n\n.thankEditor {\n  width: 99vw; height: 45vh;\n  border: 1px solid #ccc;\n  font-size: .9em;\n}\n",'\n.thankEditor{\n  padding: .5em;  margin: .5em; margin-top:1em;\n}\n\n.thankEditor ul,.thankEditor ol{\n  list-style: none;\n}\n.thankEditor ul> li::before{\n  content: \'☞\'; color: red;\n  margin-right: .5em;\n}\n.thankEditor ol {\n  counter-reset: section;\n}\n.thankEditor ol li::before {\n  counter-increment: section;\n  content: counters(section, "☞") " ";\n  margin-right: .5em;\n}\n\n.thankEditor{\n  width: 99vw; height: 45vh;\n  -webkit-transition: none;\n  transition: none;\n  -webkit-transform: rotateX(-10deg) translateZ(-200px);\n          transform: rotateX(-10deg) translateZ(-200px);\n}\n'],currentMarkdown:"",fullMarkdown:"宋康乐\n====\n求职：\n前端工程师。\n\n技能\n====\n \t★★★★★★★★ \n    ★★★★★★\n★技术及语言★\n    ★★★★\n\t★★★\n\t★★\n\t★\n----\n  - H5，Css3,Jquery，\n  - Vue，React，Angular(玩过基于Angular语法的ionic)，\n  - gulp，webpack，git，\n  - Less，Sass，\n  - node，python（会一点爬虫），了解一点php，\n  - MySQL，mongodb\n  - React native(学习中...)\n  - 公众号开发\n  - 小程序开发\n----\n\nProject introduction\n----\n    - 2016-06~2017-09\n    - 公众号：宁波云游国际\n\t- 技术：html，css，Js，Jq\n\t- 功能：提供旅游服务的产品\n\t- 项目链接地址：微信公众号(宁波云游国际旅行社)，包括pc端 http://yunyou.unohacha.com/\n⚡⚡⚡⚡⚡⚡\n    - 2017-04~2017-05\n    - pc端：矩恩生物\n    - 技术：html，css，js，JQ，\n    - 功能：一个医疗的官网\n    - 项目链接地址：http://www.gujinyiguan.com/\n⚡⚡⚡⚡⚡⚡\n\t- 2017-06~2017-09\n    - pc：夸克优富\n\t- 技术：html,css,js,JQ\n\t- 功能：一款金融的官网\n\t- 项目链接地址：http://www.quarkwealth.com/\n⚡⚡⚡⚡⚡⚡\n\t- 2017-9~2017-10\n    - pc：巨涛生物科技\n\t- 技术：html,css,js,JQ\n\t- 功能：一款粮食的官网\n    - 项目链接地址：http://www.hzpaana.com.cn/\n⚡⚡⚡⚡⚡⚡\n\t- 2017-11~2017-12\n\t- pc：趣理财后台管理系统（不断更新迭代）\n\t- 技术: vue,element,axios,echarts,es6,less,webpack\n\t- 功能：一款供内部使用的后台管理系统，包括用户管理，授信管理，提现管理，贷后管理，运营管理，财务管理，系统管理\n\t- 项目链接地址：内部系统不便提供，详情面试细谈。 \n⚡⚡⚡⚡⚡⚡\n\t- 2018-01~2018-02\n\t- 小程序：记账\n\t- 技术：小程序原生框架，\n\t- 功能：一款给老板使用的记账小程序\n\t- 项目链接地址：\n⚡⚡⚡⚡⚡⚡\n\t - 2018-03~2018-04\n\t - 移动wap：初租商户端\n\t - 技术：vue,mint,axios,echarts,es6,less,webpack\n\t - 功能：就是给线下用的回收手机的应用。\n\t - 项目链接地址：下架了\n⚡⚡⚡⚡⚡⚡\n\t - 2018-06~2018-07(更新维护)\n\t - PC：收啊后台管理系统\n\t - 技术：vue,element,axios,echarts,es6,less,webpack\n\t - 功能：一款供内部使用的后台管理系统，包括用户管理，贷后管理，运营管理，财务管理，系统管理\n\t - 项目链接地址：内部系统。。。。。。\n⚡⚡⚡⚡⚡⚡\n\t - 2018-07~2018-08\n\t - 小程序：学习react\n\t - 技术：react\n\t - 项目链接地址：自己写这玩，源码可见https://www.cnblogs.com/sklhtml/\n⚡⚡⚡⚡⚡⚡\n\t - 2018-09~2018-10\n\t - 小程序：梦想清单\n\t - 技术：小程序,node，express，mysql，\n\t - 功能：一个地方的三级分销购物平台\n\t - 项目链接地址：自己写这玩，源码可见https://www.cnblogs.com/sklhtml/\n⚡⚡⚡⚡⚡⚡\n\t - 2017-10~至今\n\t - 负责公司内部所有的H5，包括app内部的h5页面，运营的推广页面等等。\n\t\t\t\t\n\nWork Experience\n====\n\n1. 吾诺瀚卓\n2. 杭州万家乐科技\n\n\nEducational Experience\n====\n\n1. 西安外事学院\n\nBlog\n====\n\n* [GitHub](https://github.com/songkangle)\n* [个人博客](https://www.cnblogs.com/sklhtml/)\n\n\nContact Me\n====\n* 电话：13018915505\n* 微信：13186188929\n* QQ：912643012\n\n----\n\n* 我还年轻，我渴望上路，带着最初的激情，追寻着最初的梦想，感受着最初的梦想\n* on the road。 \n"}},created:function(){this.makeResume()},methods:{makeResume:function(){var n=l()(a.a.mark(function n(){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.progressivelyShowStyle(0);case 2:return n.next=4,this.progressivelyShowResume();case 4:return n.next=6,this.progressivelyShowStyle(1);case 6:return n.next=8,this.showHtml();case 8:return n.next=10,this.progressivelyShowStyle(2);case 10:return n.next=12,this.progressivelyShowThanks();case 12:return n.next=14,this.progressivelyShowStyle(3);case 14:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}(),showHtml:function(){var n=this;return new i.a(function(t,e){n.enableHtml=!0,t()})},progressivelyShowStyle:function(n){var t=this;return new i.a(function(e,r){var o=t.interval,i=l()(a.a.mark(function t(){var r,s,c,l,u,h=this;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=this.fullStyle[n]){t.next=3;break}return t.abrupt("return");case 3:console.log(),s=this.fullStyle.filter(function(t,e){return e<=n}).map(function(n){return n.length}).reduce(function(n,t){return n+t},0),c=s-r.length,this.currentStyle.length<s?(l=this.currentStyle.length-c,u=r.substring(l,l+1)||" ",this.currentStyle+=u,"\n"===r.substring(l-1,l)&&this.$refs.styleEditor&&this.$nextTick(function(){h.$refs.styleEditor.goBottom()}),setTimeout(i,o)):e();case 7:case"end":return t.stop()}},t,this)})).bind(t);i()})},progressivelyShowResume:function(){var n=this;return new i.a(function(t,e){var r=n.fullMarkdown.length,o=n.interval;!function e(){n.currentMarkdown.length<r?(n.currentMarkdown=n.fullMarkdown.substring(0,n.currentMarkdown.length+1),n.currentMarkdown[n.currentMarkdown.length-1],"\n"===n.currentMarkdown[n.currentMarkdown.length-2]&&n.$refs.resumeEditor&&n.$nextTick(function(){return n.$refs.resumeEditor.goBottom()}),setTimeout(e,o)):t()}()})},progressivelyShowThanks:function(){var n=this;return new i.a(function(t,e){var r=n.thanksMarkdown.length,o=n.interval;!function e(){n.currentThankMarkdown.length<r?(n.currentThankMarkdown=n.thanksMarkdown.substring(0,n.currentThankMarkdown.length+1),n.currentThankMarkdown[n.currentThankMarkdown.length-1],"\n"===n.currentThankMarkdown[n.currentThankMarkdown.length-2]&&n.$refs.thankEditor&&n.$nextTick(function(){return n.$refs.thankEditor.goBottom()}),setTimeout(e,o)):t()}()})}}}),y={render:function(){var n=this.$createElement,t=this._self._c||n;return t("div",{attrs:{id:"app"}},[t("div",{attrs:{id:"content"}},[t("StyleEditor",{ref:"styleEditor",attrs:{code:this.currentStyle}})],1),this._v(" "),t("ResumeEditor",{ref:"resumeEditor",attrs:{markdown:this.currentMarkdown,enableHtml:this.enableHtml}})],1)},staticRenderFns:[]};var E=e("VU/8")(b,y,!1,function(n){e("NNSU")},"data-v-3d4a6bd7",null).exports,x=e("/ocq"),M={render:function(){var n=this.$createElement;return(this._self._c||n)("div",{staticClass:"hello"})},staticRenderFns:[]};var S=e("VU/8")({name:"HelloWorld",data:function(){return{}}},M,!1,function(n){e("IKr1")},"data-v-dc4f7ede",null).exports;r.a.use(x.a);var T=new x.a({routes:[{path:"/",name:"HelloWorld",component:S}]});r.a.config.productionTip=!1,new r.a({el:"#app",router:T,components:{App:E},template:"<App/>"})},NNSU:function(n,t){},jIxe:function(n,t){}},["NHnr"]);
//# sourceMappingURL=app.559756f53de7fc4403d4.js.map