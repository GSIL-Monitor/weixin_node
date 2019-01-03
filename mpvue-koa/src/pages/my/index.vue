<template>
  <div class="container">
    <div class="userInfo">
      <div class="userInfo-img"><img :src="userInfo.avatarUrl" alt=""></div>
      <p class="userInfo-name">{{ userInfo.nickName }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userInfo: null
    }
  },
  methods: {
  },
  created () {
    this.userInfo = wx.getStorageSync("userInfo")
    if(!this.userInfo){
      console.log(11)
      const url = "pages/login/main";
      wx.navigateTo({
        url
      })
    }
    
  }
}
</script>

<style scoped>
.container{
  padding-top: 50rpx;
}
.userInfo-img{
  display: block;
  width:200rpx;
  height:200rpx;
  border-radius: 100%;
  margin:0 auto;
  overflow:hidden;
}
.userInfo-img img{
  display: block;
  width:100%;
  height:100%;
}
.userInfo-name{
  margin-top: 20rpx;
  text-align: center;
  font-size: 32rpx;
  color: #333;
}
</style>

