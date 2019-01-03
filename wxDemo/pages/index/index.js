//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        motto: 'Hello World',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        userInfo: null
    },
    //事件处理函数
    bindViewTap: function() {
        
    },
    login: function () {
        var that = this;
        wx.login({
            success: function(res){
                if(res.code){
                    wx.request({
                        url: 'http://192.168.0.102:3000/login',
                        method: 'POST',
                        data:{
                            'code': res.code
                        },
                        success: function(res){
                            console.log(res)
                            if(res.data.code=='0'){
                                console.log(11)
                                wx.getUserInfo({
                                    success: function(res){
                                        console.log(111)
                                        console.log(res)
                                        console.log(22)
                                        that.setData({
                                            userInfo: res.userInfo
                                        })
                                    },
                                    fail: function(res){
                                        console.log(res)
                                    }
                                })  
                            }
                        }
                    })
                }else{

                }
            },
            fail: function(res){
                console.log(res)
            },
            complete: function(res){
               
            }
        })
    },
    getUserInfo: function(e) {
    },
    tel: function(){
        wx.makePhoneCall({
        phoneNumber: app.globalData.phoneNumber,
        success: function(){
            console.log("成功")
        },
        fail: function(){
            console.log("失败")
        },
        complete: function(){
            console.log("完成")
        }
        })
    }
})
