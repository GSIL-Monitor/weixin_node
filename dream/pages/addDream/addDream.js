// pages/addDream/addDream.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        dreamTitle: '南越衡山',
        dreamDesc: '',
        startTime: '',
        endTime: '',
        currentTime: new Date()
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

    },

    
    dreamTitleInput: function(e){
        let that = this;
        console.log(e)
        that.setData({
            dreamTitle: e.detail.value
        })
    },
    dreamDescInput: function (e) {
        let that = this;
        that.setData({
            dreamDesc: e.detail.value
        })
    },
    bindStartDateChange: function(e){
        let that = this;
        that.setData({
            startTime: e.detail.value
        })
    },
    bindEndDateChange: function (e) {
        let that = this;
        that.setData({
            endTime: e.detail.value
        })
    },
    addDream: function () {
        let that = this;
        if (!that.data.dreamTitle){
            wx.showToast({
                title: '请输入标题',
                icon: 'none'
            })
            return
        }
        if (!that.data.dreamDesc) {
            wx.showToast({
                title: '请输入描述',
                icon: 'none'
            })
            return
        }
        if (!that.data.startTime) {
            wx.showToast({
                title: '请输入选择开始时间',
                icon: 'none'
            })
            return
        }
        if (!that.data.dreamDesc) {
            wx.showToast({
                title: '请输入选择结束时间',
                icon: 'none'
            })
            return
        }
        let userId = wx.getStorageSync('userData').id
        wx.request({
            url: getApp().globalData.urlPath + '/addDream',
            method: 'POST',
            data: {
                userId: userId,
                dreamTitle: that.data.dreamTitle,
                dreamDesc: that.data.dreamDesc,
                startTime: that.data.startTime,
                endTime: that.data.endTime,
            },
            header: {
                'content-type': 'application/json'
            },
            success: function (res) {
                if (res.data.code == "0") {
                    wx.showToast({
                        title: '请输入选择结束时间',
                        icon: 'none',
                        success: function(){
                            wx.switchTab({
                                url: '../index/index'
                            })
                        }
                    })
                    
                }

            }
        });
    },



})