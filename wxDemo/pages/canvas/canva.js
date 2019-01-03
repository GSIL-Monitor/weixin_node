// pages/canvas/canva.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        backWidth: 0,
        backHeight: 0,
        context: null,
        canvasHeight: 0,

        user: null
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onShow: function (options) {
        let that = this;
        console.log(111)
        wx.request({
            url: 'http://192.168.0.102:3000/',
            data: {
                id: 1,
            }, 
            method: 'GET', 
            success: function(res){
                console.log(res.data.code)
                console.log(that.data.user)
                if(res.data.code=='0'){
                    that.setData({
                        user: res.data.data
                    })
                    console.log(that.data.user)
                }
                
            }
        })
    },

    context: null,

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        var that = this;
        that.data.context = wx.createCanvasContext('firstCanvas', this);

        let width = 0;
        let height = 0;

        // 获取图片信息，倘若为网络图片，需先配置download域名才能生效。
        wx.getImageInfo({
            src: './img/2.jpg',             //图片的路径，可以是相对路径、临时文件路径、存储文件路径、网络图片路径
            success: function(res){
                console.log(res)
                // res.width 图片原始宽度，单位px。不考虑旋转。
                // res.height 图片原始高度，单位px。不考虑旋转。
                // res.path 图片的本地路径
                // res.orientation 拍照时设备方向
                // res.type 图片格式
                that.setData({
                    canvasHeight: 750 / res.width  * res.height
                })
                width = res.width;
                height = res.height;
                that.data.backWidth = wx.getSystemInfoSync().windowWidth;
                that.data.backHeight = that.data.backWidth / 750 * that.data.canvasHeight;
                that.data.context.drawImage('./img/2.jpg', 0, 0, that.data.backWidth, that.data.backHeight)
                that.data.context.draw();
            }
        })  
    },
    strokeImage: function () {
        var context = this.data.context;
        var x = 0;
        var y = 0;
        var width = 150;
        var height = 200;


        y = 100;
        x = this.data.backWidth / 2 - width / 2;
        context.drawImage('./img/2.jpg', x, y, width, height);
        context.draw(true)

    },
    stroketText: function(){
        var context = this.data.context;
        var x = 50;
        var y = 100;
        var width = 0;
        context.font = 'normal normal 23px 微软雅黑';       //设置字体
        context.setFillStyle("#000000");        //设置字体颜色

        var str = '赵璞:';
        width = context.measureText(str).width;
        // x = this.data.backWidth/2 - width/2;
        context.setFontSize(20)
        context.fillText(str,x+10,y)

        var str1 = '辛苦奖';
        width = context.measureText(str1).width;
        x = this.data.backWidth/2 - width/2;
        context.setFontSize(24)
        context.fillText(str1,x , 140)

        var str2 = '杭州始祖鸟科技有限公司';
        width = context.measureText(str2).width;
        x = this.data.backWidth / 2 - width / 2;
        // canvasContext.font = '5px'
        context.setFontSize(12)

        context.fillText(str2, x+70, 170)



        context.draw(true)
    },
    strokeLine: function(){
        var context = this.data.context;
        var x1 = 0;
        var x2 = 0;
        var y = 200;

        var width1 = 30;

        x1 = this.data.backWidth/2 - width1/2;
        x2 = this.data.backWidth / 2 +width1/2;

        var x = this.data.backWidth / 2;
        context.setStrokeStyle("#ff0000");
        context.setLineWidth(2);
        context.moveTo(x+60,y+20)
        context.arc(x,y+20,60,0,2 *Math.PI, true);

        context.moveTo(x + 30, y + 20)
        context.arc(x, y + 20,30, 0, Math.PI, false);


        context.moveTo(x1+5,y)
        context.arc(x1, y, 5, 0,2 * Math.PI,true);

        context.moveTo(x2 + 5, y)
        context.arc(x2, y, 5, 0, 2 * Math.PI, true);

        context.stroke();
        context.draw(true)

    },
    strokeSave: function(){
        wx.canvasToTempFilePath({
            canvasId: 'firstCanvas',
            x: 0,
            y: 0,
            width: this.data.backWidth,
            height: this.data.backHeight,
            destWidth: this.data.backWidth,
            destHeight: this.data.backHeight,
            success: function(res){
                console.log(res.tempFilePath)

                wx.saveImageToPhotosAlbum({
                    filePath: res.tempFilePath,
                    success: function(res1){
                        console.log(res1)
                    }
                })

            }
        }, this)
    }


})