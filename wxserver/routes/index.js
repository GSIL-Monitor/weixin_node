var express = require('express');
var http= require("http");
var request = require('request');
var router = express.Router();

var index  = require('../model/index.js');
var mysql  = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',    
  password : 'root',    //你的密码（就是这个该死的密码坑死我了）
  database : 'dream'    //你的数据库
});


connection.connect();



// 用户授权 -- 登录
router.post('/login',function(req,res,next){
	if(req.body.code){
		console.log(req.body.code)
		var url = 'https://api.weixin.qq.com/sns/jscode2session?appid=wxf1acfccd1a913249&secret=59554b50d3d3dbba11b9242b680c8966&grant_type=authorization_code&js_code='+req.body.code;
		request(url, function (error, response, body) {
  			if (!error && response.statusCode == 200) {
  				var bodyData = JSON.parse(body)
    			res.send({
				    code: '0',
				    messages: '处理成功',
				    data: bodyData
				});
  			}
		})
	}	
})

// 存入用户数据
router.post('/insertUserData', function(req, res, next) {
	console.log(req.body)

	if(!req.body.openid || !req.body.nickName || !req.body.avatarUrl){
		res.send({
		    code: '1001',
		    messages: '参数不完整',
		    data: null
		});
		return
	}

	var openid = req.body.openid;
	var nickName = req.body.nickName;
	var province = req.body.province;
	var city = req.body.city;
	var country = req.body.country;
	var avatarUrl = req.body.avatarUrl;
	var gender = req.body.gender;
	
	connection.query("select * from user where openid ='"+req.body.openid+"';",function(err,result){
        if(err){
        	console.log(err)
            res.render("查找失败"+err.message);
            return
        }else {

        	console.log(result[0])

        	if(result[0]){
        		res.send({
				    code: '0',
				    messages: '已授权',
				    data: null
				});
        	}else{
        		const addUserSql = "insert into user(id,openid,nickName,province,city,country,avatarUrl,gender) values(?,?,?,?,?,?,?,?)";
				var addUserData = [0,openid,nickName,province,city,country,avatarUrl,gender];

				connection.query(addUserSql,addUserData,function(err,result){
			    	if(err){
			        	console.log(err)
			            res.render("插入失败"+err.message);
			        }else {
			            res.send({
						    code: '0',
						    messages: '处理成功',
						    data: null
						});
			        }
			    });
        	}
        }
    });	
})


// 获取用户数据
router.get('/getUserData', function(req, res, next) {

  	console.log(req.query.openid)

  	if(!req.query.openid){
  		res.send({
		    code: '1001',
		    messages: '参数错误',
		    data: null
		});
		return
  	}else{
  		connection.query("select * from user where openid ='"+req.query.openid+"';",function(err,result){
  			if(err){
  				res.render("查找失败"+err.message);
  				return
  			}else{
  				if(result[0]){
	        		res.send({
					    code: '0',
					    messages: '处理成功',
					    data: result[0]
					});
	        	}
  			}
  		})	
  	}
});







module.exports = router;
