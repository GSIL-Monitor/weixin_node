// pages/login/login.js
Page({
    /**
     * 页面的初始数据
     */
    data: {

    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var that = this;
        // 查看是否授权        
        wx.getSetting({
            success: function (res) {
                if (res.authSetting['scope.userInfo']) {
                    wx.getUserInfo({
                        success: function (res) {
                            //从数据库获取用户信息                            
                            that.getUsreInfo();
                            //用户已经授权过                            
                            wx.switchTab({
                                url: '../index/index'
                            })
                        }
                    });
                }
            }
        })
    },
    bindGetUserInfo: function (e) {
        var that = this;
        if (e.detail.userInfo) {            
            wx.request({                
                url: getApp().globalData.urlPath + '/insertUserData',
                method: 'POST',                                  
                data: {                    
                    openid: getApp().globalData.openid,                    
                    nickName: e.detail.userInfo.nickName,                    
                    avatarUrl: e.detail.userInfo.avatarUrl,  
                    province:e.detail.userInfo.province,
                    country: e.detail.userInfo.country,               
                    city: e.detail.userInfo.city,
                    gender: e.detail.userInfo.gender,
                },                
                header: {                    
                    'content-type': 'application/json'                
                },                
                success: function (res) {                    
                    //从数据库获取用户信息                    
                    that.getUsreInfo();               
                }            

            });            
            //授权成功后，跳转进入小程序首页            
            wx.switchTab({
                url: '../index/index'
            })
        } else {
            //用户按了拒绝按钮            
            wx.showModal({
                title: '警告',
                content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
                showCancel: false,
                confirmText: '返回授权',
                success: function (res) {
                    if (res.confirm) {
                        console.log('用户点击了“返回授权”')
                    }
                }
            })
        }
    },
    //获取用户信息接口    
    getUsreInfo: function () {
        let openid = wx.getStorageSync('openid');
        wx.request({
            url: getApp().globalData.urlPath + '/getUserData',
            data: {
                openid: openid
            },
            header: {
                'content-type': 'application/json'
            },
            success: function (res) {
                wx.setStorageSync("userData", res.data.data)
            }
        })
    }, 
})