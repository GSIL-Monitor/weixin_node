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
		var url = 'https://api.weixin.qq.com/sns/jscode2session?appid=你的APPID&secret=你的密钥&grant_type=authorization_code&js_code='+req.body.code;
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

// 
router.post('/addDream', function(req, res, next) {

	var userId = req.body.userId;
	var dreamTitle = req.body.dreamTitle;
	var dreamDesc = req.body.dreamDesc;
	var startTime = req.body.startTime;
	var endTime = req.body.endTime;
	var isDelete = 0;

	const addUserSql = "insert into dream(id,userId,dreamTitle,dreamDesc,startTime,endTime,isDelete) values(?,?,?,?,?,?,?)";
	var addUserData = [0,userId,dreamTitle,dreamDesc,startTime,endTime,isDelete];

	connection.query(addUserSql,addUserData,function(err,result){
    	if(err){
        	console.log(err)
            res.render("插入失败"+err.message);
        }else {
            res.send({
			    code: '0',
			    messages: '添加成功',
			    data: null
			});
        }
    });
  	
});

router.get('/getDreamData', function(req, res, next) {
	if(req.query.id){
		connection.query("select * from dream where userId ='"+req.query.id+"' and isDelete=0;",function(err,result){
			console.log(err)
			if(err){
				res.render("查找失败"+err.message);
				return
			}else{
				console.log(result)
				if(result){
		    		res.send({
					    code: '0',
					    messages: '处理成功',
					    data: result
					});
	    		}
			}
		})
	}

});


router.post('/deleteDreamData', function(req, res, next) {
	console.log(req.body.id)
	console.log(req.body.userId)

	if(!req.body.id || !req.body.userId){
		res.send({
		    code: '0',
		    messages: '参数不完整',
		    data: null
		});
		return
	}else{
		connection.query("delete from dream where userId ='"+req.body.userId+"'and id='"+req.body.id+"';",function(err,result){
			console.log(err)
			if(err){
				res.render("查找失败"+err.message);
				return
			}else{
				console.log(result)
				if(result){
		    		res.send({
					    code: '0',
					    messages: '处理成功',
					    data: null
					});
	    		}
			}
		})	
	}
});


router.post('/completeDreamData', function(req, res, next) {

	if(!req.body.id || !req.body.userId){
		res.send({
		    code: '0',
		    messages: '参数不完整',
		    data: null
		});
		return
	}else{
		connection.query("update dream set isDelete=1 where userId ='"+req.body.userId+"'and id='"+req.body.id+"';",function(err,result){
			console.log(err)
			if(err){
				res.render("查找失败"+err.message);
				return
			}else{
				console.log(result)
				if(result){
		    		res.send({
					    code: '0',
					    messages: '处理成功',
					    data: result
					});
	    		}
			}
		})	
	}
});

router.get('/getCompleteDreamData', function(req, res, next) {
	if(req.query.id){
		connection.query("select * from dream where userId ='"+req.query.id+"' and isDelete=1;",function(err,result){
			console.log(err)
			if(err){
				res.render("查找失败"+err.message);
				return
			}else{
				console.log(result)
				if(result){
		    		res.send({
					    code: '0',
					    messages: '处理成功',
					    data: result
					});
	    		}
			}
		})
	}

});







module.exports = router;
