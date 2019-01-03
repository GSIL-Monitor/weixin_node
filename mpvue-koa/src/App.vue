<script>
import qcloud from 'wafer2-client-sdk'
import { get,showSucccess } from './util.js';
import config from './config'

export default {
  async created () {
    // 调用API从本地缓存中获取数据
    // const logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    // console.log('小程序启动了')

    // const res = await get('/weapp/demo');
    // console.log(123,res)
    // qcloud.setLoginUrl(config.loginUrl);
    // qcloud.login({
    //     success: function (userInfo) {
    //         console.log('登录成功', userInfo);
    //     },
    //     fail: function (err) {
    //         console.log('登录失败', err);
    //     }
    // });


  }
}
</script>
<style>
*{
  padding:0;
  margin:0;
  
}
</style>
