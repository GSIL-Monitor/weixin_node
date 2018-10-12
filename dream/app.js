//app.js
App({
    onLaunch: function () {
        var that = this;
        // 登录
        wx.login({
            success: res => {
                // 发送 res.code 到后台换取 openId, sessionKey, unionId
                wx.request({
                    url: 'http://192.168.3.80:3000/login',
                    // url: 'http://192.168.0.102:3000/login',
                    method: 'POST',
                    header:{
                        'content-type': 'application/json'
                    },
                    data:{
                        code: res.code
                    },
                    success: res => { 
                        let data = res.data.data
                        wx.setStorageSync('openid', res.data.data.openid)

                        // that.globalData.openid = data.openid;
                        // session_key  //调用接口的凭证
                        // openid是公公众号的普通用户的一个唯一的标识
                        // 开发者可通过OpenId来获取用户的基本信息
                        // 只要获得openId就可以相继获得用户的一些信息
                    }
                })
            }
        })
    },
    globalData: {
        userInfo: null,
        openid: null,
        urlPath: 'http://192.168.3.80:3000'
        // urlPath: 'http://192.168.0.102:3000'
    }
})