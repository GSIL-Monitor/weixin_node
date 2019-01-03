// pages/animation/animation.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        animationData: null
    },
    tap: function(){
        // 创建一个动画实例 animation。调用实例的方法来描述动画。最后通过动画实例的 export 方法导出动画数据传递给组件的 animation 属性。
        var animation = wx.createAnimation({
            duration: 1000,                     //动画持续时间，单位 ms
            timingFunction: 'ease',             //动画的效果
            // timingFunction的合法值
            // linear               动画从头到尾的速度是相同的
            // ease                 动画以低速开始，然后加快，在结束前变慢
            // ease-in              动画以低速开始
            // ease-in-out          动画以低速开始和结束
            // ease-out             动画以低速结束
            // step-start           动画第一帧就跳至结束状态直到结束
            // step-end             动画一直保持开始状态，最后一帧跳到结束状态


            delay: 0,                        //动画延迟时间，单位 ms
            transformOrigin: '50% 50% 0'
        })
        //表示一组动画完成，可以在一组动画中调用任意多个动画方法，一组动画中的所有动画会同时开始，一组动画完成后才会进行下一组动画。
        // animation.setp()
        // animation.rotate(180).step()          //从原点顺时针旋转一个角度
        // animation.scale(0.8).step()             //缩放
        // animation.skew(45, 50).step()              //对 X、Y 轴坐标进行倾斜
        // animation.opacity(0.6).step()               // 设置透明度
        // animation.backgroundColor('#fff000').step()     //设置背景色

        // animation.translate(100, 100).step()             //平移变换

        animation.width('100%').step()          //设置宽度
        // animation.height(50).step()          //设置高度
        animation.left(20).step()          //设置设置 left 值
        // animation.right('100%').step()          //设置right
        animation.top(20).step()          //设置top
        // animation.bottom('100%').step()          //设置bottom



        this.setData({
            animationData: animation.export()     //导出动画队列
        })

        console.log(this.data.animationData)

    },
    nav: function(){
        //在当前页面显示导航条加载动画
        wx.showNavigationBarLoading();
        //动态设置当前页面的标题
        wx.setNavigationBarTitle({
            title: 'skl',
        })
        wx.setNavigationBarColor({
            frontColor: '#ffffff', //前景颜色值，包括按钮、标题、状态栏的颜色，仅支持 #ffffff 和 #000000
            backgroundColor: '#ff0000',     //背景颜色值，有效值为十六进制颜色
            animation: {                 //动画效果
                duration: 3000,
                timingFunction: 'ease',
            }
        })
        //在当前页面隐藏导航条加载动画
        wx.hideNavigationBarLoading();
    },

    jiaohu: function(){
        //显示模态对话框
        // wx.showModal({
        //     title: 'skl',               //提示的标题
        //     content: 'skl123456',       //提示的内容
        //     showCancel: true,             //是否显示取消按钮
        //     cancelText: '我不确定',             //取消按钮的文字，最多 4 个字符
        //     cancelColor: '#ff0000',            //取消按钮的文字颜色，必须是 16 进制格式的颜色字符串
        //     confirmText: '我确定',      //确认按钮的文字，最多 4 个字符
        //     confirmColor: '#000000',    //确认按钮的文字颜色，必须是 16 进制格式的颜色字符串
        //     success: function(res){ 
        //         console.log(res)
        //         if (res.confirm){
        //             console.log(111)
        //         } else if (res.cancel){
        //             console.log(222)
        //         }
        //     }
        // })

        //显示消息提示框
        // wx.showToast({
        //     title: '你确定',            //提示的内容
        //     icon: 'success',            //图标
        //     image: '',                  //自定义图标的本地路径，image 的优先级高于 icon
        //     duration: 15000,             //提示的延迟时间
        //     mask: false,                //是否显示透明蒙层，防止触摸穿透
        //     success: function(res){

        //     }
        // })

        //隐藏消息提示框
        // wx.hideToast()


        //  loading 提示框
        // wx.showLoading({
        //     title: '正在进行中。。。。',
        //     mask: false,
        //     success: function(){

        //     }
        // })
        // 隐藏 loading 提示框
        // setTimeout(function(){
        //     wx.hideLoading()
        // },1000)
        
        wx.showActionSheet({
            itemList: ['1', '2', '3'],        //按钮的文字数组，数组长度最大为 6
            itemColor: '#000000',               //按钮的文字颜色
            success: function(res){
                console.log(res)
                // res.tapIndex用户点击的按钮序号，从上到下的顺序，从0开始
            },
            fail: function(res){
                console.log(res)
            }
        })

       

    },



    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})