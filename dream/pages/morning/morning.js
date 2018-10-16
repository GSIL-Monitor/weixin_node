// pages/morning/morning.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        backWidth: 0,
        backHeight: 0,
        canvasWidth: 750,
        canvasHeight: 0, 
        latitude: 0,      //纬度
        longitude: 0,      //经度
        contextCanvas: null,
    },
    onLoad: function (options) {
        let that = this;
       


    },



    tijiao: function(){

    },



    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        let that = this;

        that.data.contextCanvas = wx.createCanvasContext('canvasId', this);


        //获取手机的信息
        wx.getSystemInfo({
            success: function (res) {
                that.setData({
                    backWidth: res.screenWidth
                })
            }
        })
        // 获取图片的信息
        wx.getImageInfo({
            src: '../../img/morning4.jpg',
            success: function(res){
                let canvasHeight = 750 / res.width * res.height;
                that.setData({
                    canvasHeight: canvasHeight
                })
                that.data.backHeight = that.data.backWidth / 750 * that.data.canvasHeight
                that.data.contextCanvas.drawImage('../../img/morning4.jpg', 
                0, 0, that.data.backWidth, that.data.backHeight)
                that.data.contextCanvas.draw(); 
                that.strokeImage(that)              
            }
        })
        //获取位置
        wx.getLocation({
            success: function(res) {
                that.setData({
                    latitude: res.latitude,             //正数表示北纬，负数表示南纬
                    longitude: res.longitude            //证数表示东经，负数表示西经
                })
            },
        })

        
        

    },
    strokeImage: function (that) {
        var that = this;
        var x = 10;
        var y = 110;

        let img = wx.getStorageSync("userData").avatarUrl;
        let nickName = wx.getStorageSync("userData").nickName;

        console.log(nickName)

        var d = 2 * 25;
        var cx = x + 25;
        var cy = y + 25;



        that.data.contextCanvas.setFontSize(16)
        that.data.contextCanvas.setFillStyle("#fff");        //设置字体颜色
        that.data.contextCanvas.fillText("我还年轻，我渴望上路", x + 10, y + 100)
        that.data.contextCanvas.fillText("带着最初的激情", x + 10, y + 120)
        that.data.contextCanvas.fillText("追寻最初的梦想", x + 10, y + 140)
        that.data.contextCanvas.fillText("感受最初的体验", x + 10, y + 160)
        that.data.contextCanvas.fillText("on the road", x + 10, y + 180)
        that.data.contextCanvas.draw(true)


        that.data.contextCanvas.drawImage("../../img/meCode.jpg", that.data.backWidth - 80, that.data.backWidth - 90, 70, 70);
        that.data.contextCanvas.draw(true)


        // 获取当前事件
        let time = new Date();
        // 绘制天
        that.data.contextCanvas.setFontSize(30)
        that.data.contextCanvas.setFillStyle("#000000");        //设置字体颜色
        that.data.contextCanvas.fillText(time.getDate(), that.data.backWidth - 59, 30)
        that.data.contextCanvas.draw(true)

        //绘制月
        that.data.contextCanvas.setFontSize(20)
        that.data.contextCanvas.setFillStyle("#ffffff");        //设置字体颜色
        that.data.contextCanvas.fillText(time.getMonth()+1+"月", that.data.backWidth - 60, 55)
        that.data.contextCanvas.draw(true)

        //绘制天月时间
        let timeWidth = that.data.backWidth - 70;
        that.data.contextCanvas.rect(timeWidth, 0, 60, 70)
        that.data.contextCanvas.setFillStyle('rgba(255,255, 255, 0.4)')
        that.data.contextCanvas.fill()
        that.data.contextCanvas.draw(true)
    
        //绘制大长方形
        that.data.contextCanvas.rect(x, y-10, that.data.backWidth - 20, 70)
        that.data.contextCanvas.setFillStyle('rgba(255,255, 255, 0.6)')
        that.data.contextCanvas.fill()
        that.data.contextCanvas.draw(true)


        //绘制时分秒
        that.data.contextCanvas.setFontSize(30)
        that.data.contextCanvas.setFillStyle("#000000");        //设置字体颜色
        that.data.contextCanvas.fillText(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds(), x + 80, y + 50)
        that.data.contextCanvas.draw(true)

        
        //绘制字体
        that.data.contextCanvas.setFontSize(14)
        that.data.contextCanvas.setFillStyle("#000000");        //设置字体颜色
        that.data.contextCanvas.fillText(nickName, x+80, y+15)
        that.data.contextCanvas.draw(true)
   
        
        //绘制园头像
        that.data.contextCanvas.arc(cx+10, cy, 25, 0, 2 * Math.PI);
        that.data.contextCanvas.fill()
        that.data.contextCanvas.clip();
        that.data.contextCanvas.drawImage(img, x+10, y, 50, 50);
        that.data.contextCanvas.draw(true)

    },
    strokeSave: function () {
        wx.canvasToTempFilePath({
            canvasId: 'canvasId',
            x: 0,
            y: 0,
            width: this.data.backWidth,
            height: this.data.backHeight,
            destWidth: this.data.backWidth,
            destHeight: this.data.backHeight,
            success: function (res) {
                console.log(res.tempFilePath)
                wx.saveImageToPhotosAlbum({
                    filePath: res.tempFilePath,
                    success: function (res1) {
                        console.log(res1)
                    }
                })

            }
        }, this)
    }





})