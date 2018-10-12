Page({ 
    data: {        
        //判断小程序的API，回调，参数，组件等是否在当前版本可用。        
        // canIUse: wx.canIUse('button.open-type.getUserInfo'),
        dreamList: [],
        startX: 0,
        startY: 0,
        delBtnWidth: 100,
    },    
    onLoad: function (options) {        
        var that = this;
        that.getDreamData()
    },
    indexJump: function(){
        wx.navigateTo({
            url: '../addDream/addDream'
        })
    },
    getDreamData: function(){
        let that = this;
        let id = wx.getStorageSync("userData").id;
        wx.request({
            url: getApp().globalData.urlPath + '/getDreamData',
            method: 'GET',
            data: {
                id: id
            },
            success: function (res) {
                if(res.data.code == '0'){
                    let dreamList = [];
                    res.data.data.forEach(function(item,index){
                        dreamList.push({
                            dreamDesc: item.dreamDesc,
                            dreamTitle: item.dreamTitle,
                            id: item.id,
                            userId: item.userId,
                            txtStyle: "left:0px"
                        })
                    })
                    that.setData({
                        dreamList: dreamList
                    })
                }
                // 隐藏导航栏加载框
                wx.hideNavigationBarLoading();
                // 停止下拉动作
                wx.stopPullDownRefresh();
            }
        });
    },
    //下拉刷新
    onPullDownRefresh: function(){
        let that = this;
        wx.showNavigationBarLoading();
        that.getDreamData();
    },
    dreamStart: function(e){
        let that = this;
        if (e.touches.length == 1) {
            that.setData({
                //记录触摸起始位置的X坐标
                startX: e.touches[0].clientX,
                startY: e.touches[0].clientY
            });
        }
    },
    dreamMove: function (e) {
        let that = this;
        if (e.touches.length == 1) {
            var moveX = e.touches[0].clientX;
            var moveY = e.touches[0].clientY;



            //获取滑动角度
            let angle = that.angle({ X: that.data.startX, Y: that.data.startY }, { X: moveX, Y: moveY });
            if (Math.abs(angle) > 10) return;

            //计算手指起始点的X坐标与当前触摸点的X坐标的差值
            var disX = that.data.startX - moveX;
            //delBtnWidth 为右侧按钮区域的宽度
            var delBtnWidth = that.data.delBtnWidth;
            var txtStyle = "";
            if (disX == 0 || disX< 0){
                txtStyle = "left:0px";
            } else if (disX > 0){
                txtStyle = "left:-" + delBtnWidth + "px";
                if (disX >= delBtnWidth) {
                    //控制手指移动距离最大值为删除按钮的宽度
                       txtStyle = "left:-" + delBtnWidth + "px";
                }
            }
            //获取手指触摸的是哪一个item
            var index = e.currentTarget.dataset.index;
            var list = that.data.dreamList;
            // //将拼接好的样式设置到当前item中
            list[index].txtStyle = txtStyle;
            // //更新列表的状态
            that.setData({
                dreamList: list
            });
        }
    },
    bindDelete: function(e){
        let that = this;
        let userId = wx.getStorageSync("userData").id;
        let id = e.target.dataset.id;
        wx.request({
            url: getApp().globalData.urlPath + '/deleteDreamData',
            method: 'POST',
            data: {
                id: e.target.dataset.id,
                userId: userId 
            },
            success: function (res) {
                if (res.data.code == '0') {
                    let indexTip = e.currentTarget.dataset.index;
                    let dreamList = [];
                    that.data.dreamList.splice(indexTip, 1);
                    dreamList = that.data.dreamList
                    that.setData({
                        dreamList: dreamList
                    });
                }
            }
        });
    },
    bindComplete: function (e) {
        let that = this;
        let userId = wx.getStorageSync("userData").id;
        let id = e.target.dataset.id;
        wx.request({
            url: getApp().globalData.urlPath + '/completeDreamData',
            method: 'POST',
            data: {
                id: e.target.dataset.id,
                userId: userId
            },
            success: function (res) {
                if (res.data.code == '0') {
                    let indexTip = e.currentTarget.dataset.index;
                    let dreamList = [];
                    that.data.dreamList.splice(indexTip, 1);
                    dreamList = that.data.dreamList
                    that.setData({
                        dreamList: dreamList
                    });
                }
            }
        });
    },


    /**
     * 计算滑动角度
     * @param {Object} start 起点坐标
     * @param {Object} end 终点坐标
   */
    angle: function (start, end) {
        var _X = end.X - start.X,
            _Y = end.Y - start.Y
        //返回角度 /Math.atan()返回数字的反正切值
        return 360 * Math.atan(_Y / _X) / (2 * Math.PI);
    },

}) 