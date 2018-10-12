// pages/completeDream/completeDream.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        dreamList: [],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let that = this;
        that.getDreamData();
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
        let that = this;
        that.getDreamData();
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
    getDreamData: function () {
        let that = this;
        let id = wx.getStorageSync("userData").id;
        wx.request({
            url: getApp().globalData.urlPath + '/getCompleteDreamData',
            method: 'GET',
            data: {
                id: id
            },
            success: function (res) {
                if (res.data.code == '0') {
                    let dreamList = [];
                    that.setData({
                        dreamList: res.data.data
                    })
                }
            }
        });
    },
})