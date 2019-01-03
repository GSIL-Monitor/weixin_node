<template>
    <div id="persons">
        <button open-type="getUserInfo" lang="zh_CN" @getuserinfo="doLogin">授权登录</button>
    </div>
</template>
<script>
  import qcloud from 'wafer2-client-sdk';
  import config from '@/config.js';
  import { get,showSucccess } from '@/util.js';
  export default {
    methods: {
        doLogin: function (e) {
            qcloud.setLoginUrl(config.loginUrl)
            qcloud.login({
                success: function (userInfo) {
                    // console.log('登录成功', userInfo)
                    wx.setStorageSync("userInfo",userInfo);
                    showSucccess("登录成功")
                    const url = '../my/main'
                    wx.switchTab({
                        url
                    })
                },
                fail: function (err) {
                    console.log('登录失败', err)
                }
            })
        }
    },
    created(){
        let user = wx.getStorageSync('userInfo');
        if(user){
            console.log(111)
            const url = '../my/main'
            wx.switchTab({ url })
            console.log(11)
        }
    }
  }
</script>

<style scoped>

</style>