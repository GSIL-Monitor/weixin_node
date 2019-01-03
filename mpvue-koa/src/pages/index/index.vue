<template>
  <div class="index-page">

    <div class="page-swiper">
      <swiper :indicator-dots="swiper.indicatorDots" :autoplay="swiper.autoplay" :interval="swiper.interval" :duration="swiper.duration">
        <block v-for="(item,index) in swiper.imgUrls" :key="index">
          <swiper-item>
            <image :src="item" class="slide-image" width="375" height="130"/>
          </swiper-item>
        </block>
      </swiper>
    </div>
    <div class="page-time">
      <p>今日时间:{{ time }}</p>
      <span></span>
    </div>
  </div>
</template>

<script>
import card from '@/components/card'
import banner1 from '@/components/img/banner1.png'
import banner2 from '@/components/img/banner2.png'
import banner3 from '@/components/img/banner3.png'
import banner4 from '@/components/img/banner4.png'
export default {
  data () {
    return {
      swiper:{
        imgUrls: [
          banner1,
          banner2,
          banner3,
          banner4
        ],
        indicatorDots: true,        //是否显示面板指示点
        autoplay: true,
        interval: 3000,
        duration: 1000  
      },
      time: new Date()
      
    }
  },

  components: {
    card
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  }
}
</script>

<style lang="less" scoped>
  .index-page{
    .page-swiper{
      width:100%;
      height:260rpx;
      swiper{
        width:100%;
        height:260rpx;
        image{
          display:block;
          width:100%;
          height:260rpx;
        }
      }
    }
  }
</style>
