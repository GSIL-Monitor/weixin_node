// pages/scroll.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        scrollTop: null,
        id: null,
        tmpImageUrl: null,
        flexImageSize: {
            width:0,
            height:0
        },
        poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
        name: '此时此刻',
        src: 'https://hanwslh5.qcloud.la/audio/1.mp3',
        author: 'skl',
        src1 : 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
        audioPercent: 0,
        timer: null,
        danmuList: [
            {
                text: 'haah',
                color: '#ddd',
                time: 3
            },
            {
                text: 'haah11111',
                color: '#ddd',
                time: 5
            }
        ]

    },

    refreshPercent: function () {
        var that = this;
        wx.getBackgroundAudioPlayerState({
            success: function (res) {
                console.log(111)
                console.log(res)
                that.setData({
                    audioPercent: (res.currentPosition / res.duration) * 100
                })
            }
        })
        that.timer = setTimeout(function(){
            that.refreshPercent();
        },100)
    },

    mapCtx : null,
    audioCtx: null,
    videoCtx: null,
    onLoad: function(options){
        var that = this;
        wx.onBackgroundAudioPlay(function(){
            console.log('onBackgroundAudioPlay')

            that.timer = setTimeout(function(){
                that.refreshPercent();
            },100)
            
        })
        wx.onBackgroundAudioPause(function () {
            console.log('onBackgroundAudioPause')
            clearTimeout(that.timer)
        })
        wx.onBackgroundAudioStop(function () {
            console.log('onBackgroundAudioStop')
            clearTimeout(that.timer)
            that.setData({
                audioPercent: 0
            })
        })


    },
    onReady: function(){
        this.mapCtx = wx.createMapContext('myMap',this)

        this.audioCtx = wx.createAudioContext('myAudio', this)

        this.videoContext = wx.createVideoContext('myVideo',this);

    },

    upper: function(e){
        // console.log(e)
    },
    lower: function(e){
        // console.log(e)
    },
    scroll: function(e){
        // console.log(e)
    },
    scrolltwo: function(e){
        this.setData({
            scrollTop: 0
        })
    },
    scrollintoview: function(e){
        this.setData({
            id: 'yellow'
        })
    },
    getData: function(){
        console.log(111)
        wx.request({
            url: 'https://hanwslh5.qcloud.la/weapp/HelloWorld',

            // get的方法
            // data:{
            //     "p1": 1,
            //     "p2": 'p2'
            // },
            // method: 'GET',

            //post的方法urlencode
            // data:{
            //     "p1": 1,
            //     "p2": 'p2'
            // },
            // header:{
            //     'content-type': 'application/x-www-form-urlencoded'
            // },
            // method: 'POST',

            //post的方法 Json
            data:{
                "p1": 1,
                "p2": 'p2'
            },
            header:{
                'content-type': 'application/json'
            },
            method: 'POST',


            success: function(res){
                console.log(1111)
                console.log("-----in success-----")
                console.log(res)
                console.log(res.statusCode)
                if (res.StatusCode==200){
                    console.log(res.statusCode)
                }
            },
            fail: function(res){
                console.log("-----in fail-----")
                console.log(res)
            },
            complete: function(res){
                console.log("-----in complete-----")
                console.log(res)
            }
        })
    },



    upLoad: function(){
        console.log(111)
        let that = this;


        // 拨打电话
        // wx.makePhoneCall({
        //     phoneNumber: '100 0000 0000',       //需要拨打的电话号码
        //     success: function () {              //接口调用成功的回调函数

        //     },
        //     fail: function () {                 //接口调用失败的回调函数

        //     },
        //     complete: function () {             //接口调用结束的回调函数（调用成功、失败都会执行）

        //     }
        // })


        //从本地相册选择图片或使用相机拍照。
        wx.chooseImage({                                
            count: 2,                                   //最多可以选择的图片张数
            sizeType: ['original', 'compressed'],       //所选的图片的尺寸  original原图   compressed亚缩图
            sourceType: ['album', 'camera'],            //选择图片的来源   album 从相册选图    camera 使用相机
            success: function (res) {                   //接口调用成功的回调函数
                console.log(res);

                //在新页面中全屏预览图片。预览的过程中用户可以进行保存图片、发送给朋友等操作
                wx.previewImage({
                    urls: res.tempFilePaths,                   //需要预览的图片链接列表
                    current: res.tempFilePaths[0],              //当前显示图片的链接
                    success: function (res) {                     //接口调用成功的回调函数
                        // console.log(res)
                    },
                    fail: function (res) {                      //接口调用失败的回调函数

                    },
                    complete: function (res) {                  //接口调用结束的回调函数（调用成功、失败都会执行）

                    }
                });

                //获取图片信息，倘若为网络图片，需先配置download域名才能生效。
                wx.getImageInfo({
                    src: res.tempFilePaths[0],                  //图片的路径，可以是相对路径、临时文件路径、存储文件路径、网络图片路径
                    success: function (res) {                     //接口调用成功的回调函数
                        console.log(res)
                    },
                    fail: function (res) {                      //接口调用失败的回调函数
                    },
                    complete: function (res) {                  //接口调用结束的回调函数（调用成功、失败都会执行）
                    }
                })



                that.setData({
                    tmpImageUrl: res.tempFilePaths[0]
                })
            },
            fail: function (res) {                      //接口调用失败的回调函数
            },
            complete: function (res) {                  //接口调用结束的回调函数（调用成功、失败都会执行）
            }
        })
    },
    tempImageLoaded: function(e){
        var width = 750;
        var height = 750 / e.detail.width * e.detail.height
        this.setData({
            'flexImageSize.width' : width + 'rpx',
            'flexImageSize.height': height + 'rpx',
        })
    },
    upLoad2: function(){
        var that = this;
        wx.chooseImage({
            count: 2,
            sizeType: ['original', 'compressed'],
            sourceType: ['album', 'camera'], 
            success: function(res) {
                // console.log(res)


                wx.showToast({
                    title: 'uploading',
                    icon: 'loading',
                    duration: 1000
                })

                that.imgUploadFile(res);
                

            },
        })
    },
    imgUploadFile: function(res){
        var that = this;

        //上传文件
        wx.uploadFile({ 
            url: 'https://hanwslh5.qcloud.la/weapp/upload',                 //开发者服务器地址
            filePath: res.tempFilePaths[0],                                 //要上传文件资源的路径
            name: 'file',                                                   //文件对应的 key，开发者在服务端可以通过这个 key 获取文件的二进制内容
            header: {},                                                     //HTTP 请求 Header，Header 中不能设置 Referer
            formData: {},                                                    //HTTP 请求中其他额外的 form data
            success: function (res) {                                       //接口调用成功的回调函数
                console.log(1111)
                var img = JSON.parse(res.data);
                console.log(img)
                wx.hideToast();
                wx.showToast({
                    title: 'successed',
                    icon: 'success',
                    duration: 1000
                })
                that.setData({
                    tmpImageUrl: img.data.imgUrl
                })
            },
            fail: function () {                                               //接口调用失败的回调函数
                wx.hideToast();
                wx.showToast({
                    title: 'fail',
                    showCancel: false
                })
            },
            complete: function () {                                               //接口调用结束的回调函数（调用成功、失败都会执行）

            }
        })
    },

    downLoad: function(res){
        var that = this;
        //下载文件资源到本地，客户端直接发起一个 HTTPS GET 请求，返回文件的本地临时路径。
        wx.downloadFile({
            url: 'https://hanwslh5.qcloud.la/data/1.jpg',           //下载资源的 url
            header: {},                                             //HTTP 请求的 Header，Header 中不能设置 Referer
            filePath: '',                                           //指定文件下载后存储的路径
            success: function (res) {                               //接口调用成功的回调函数
                console.log(res.tempFilePath)

                //回显
                // wx.previewImage({
                //     urls: [res.tempFilePath],
                //     success:function(res1){
                //         console.log(res1)
                //     },
                //     complete: function(res1){}
                // })
                //文件保存
                // wx.saveFile({
                //     tempFilePath: res.tempFilePath,         //需要保存的文件的临时路径
                //     success: function (res2) {              //接口调用成功的回调函数
                //         console.log(res2)
                //     },
                //     fail: function (res2) {                    //接口调用失败的回调函数

                //     },
                //     complete: function (res2) {                   //接口调用结束的回调函数（调用成功、失败都会执行）

                //     }
                // })

                // 保存图片到系统相册。
                wx.saveImageToPhotosAlbum({
                    filePath: res.tempFilePath,                 //图片文件路径，可以是临时文件路径或永久文件路径，不支持网络图片路径
                    success: function(res2){
                        console.log(res2)
                        wx.showToast({
                            title: '下载成功',
                            icon: 'success',
                            duration: 5000
                        })      
                    }
                })

                // that.setData({
                //     tmpImageUrl: res.tempFilePath
                // })
            },
            fail: function () {                                      //接口调用失败的回调函数                        

            },
            complete: function () {                                  //接口调用结束的回调函数（调用成功、失败都会执行）	

            }
        })
    },
    map: function(){
        // 获取当前的地理位置、速度。当用户离开小程序后，此接口无法调用。
        // wx.getLocation({
        //     type: 'wgs84',                          //wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
        //     altitude: false,                        //传入 true 会返回高度信息，由于获取高度需要较高精确度，会减慢接口返回速度          
        //     success: function (res) {               //接口调用成功的回调函数
        //         console.log(res)
        //         //res.latitude                    //纬度，范围为 -90~90，负数表示南纬
        //         //res.longitude                   //经度，范围为 -180~180，负数表示西经
        //         //res.speed                        //速度，单位 m/s
        //         //res.accuracy                     //位置的精确度
        //         //rws.altitude                      //高度，单位 m
        //         // res.verticalAccuracy             //垂直精度，单位 m（Android 无法获取，返回 0）
        //         //res.horizontalAccuracy            //水平精度，单位 m
        //     }
        // })


        // this.mapCtx.getCenterLocation({
        //     success: function(res){
        //         console.log(res)
        //     }
        // })


        //​使用微信内置地图查看位置。
        wx.openLocation({
            latitude: 39.9043,                   //纬度，范围为-90~90，负数表示南纬。使用 gcj02 国测局坐标系
            longitude: 116.407526,                   //经度，范围为-180~180，负数表示西经。使用 gcj02 国测局坐标系
            scale: 18,                          //缩放比例，范围5~18
            name: '北京',                           //位置名
            address: '北京市海淀区',                        //地址的详细说明
            success: function(res){
                console.log(111)
            }
        })


        // 打开地图选择位置。
        // wx.chooseLocation({
        //     success: function(res){
        //         console.log(res)
        //         // res.name                 //位置名称
        //         // res.address              //详细地址
        //         // res.latitude             //纬度，浮点数，范围为-90~90，负数表示南纬。使用 gcj02 国测局坐标系
        //         // res.longitude            //经度，浮点数，范围为-180~180，负数表示西经。使用 gcj02 国测局坐标系
        //     }
        // })
    },

    play: function(){
        // 使用后台播放器播放音乐，对于微信客户端来说，只能同时有一个后台音乐在播放。
        // 当用户离开小程序后，音乐将暂停播放；当用户在其他小程序占用了音乐播放器，原有小程序内的音乐将停止播放。
        wx.playBackgroundAudio({
            dataUrl: 'https://hanwslh5.qcloud.la/audio/1.mp3',                  //音乐链接，目前支持的格式有 m4a, aac, mp3, wav
            title: '此时此刻',                                                   //音乐标题
            coverImgUrl: '',                                                     //封面URL
            success: function (res) {                                              //接口调用成功的回调函数
                console.log(res)
            }
        })
    },
    pause: function(){
        wx.pauseBackgroundAudio();                              //暂停播放音乐。
    },
    stop: function(){
        wx.stopBackgroundAudio();                   //停止播放音乐。
    },
    seek: function(){
        wx.seekBackgroundAudio({                   //控制音乐播放进度。
            position: 5,                        //音乐位置，单位：秒
        })
    },
    //获得状态
    getStatus: function(){
        console.log(111)
        // 获取后台音乐播放状态。
        wx.getBackgroundAudioPlayerState({
            success: function(res) {
               console.log(res) 
            }
        })
    },
    audioPlay: function(res){
        this.audioCtx.play();
        this.refreshPercent();
    },
    audioPause: function () {
        this.audioCtx.pause()
    },
    audio15: function () {
        this.audioCtx.seek(15)
    },
    audioStart: function () {
        this.audioCtx.seek(0)
    },



    inputValue: null,
    inputBlur: function(e){
        this.inputValue = e.detail.value
        console.log(this.inputValue)
    },
    sendDanmu: function(){
        console.log(this.inputValue)
        console.log(this.videoContext)
        this.videoContext.sendDanmu({
            text: this.inputValue,
            color: '#fff000'
        })

        var danmuListData = this.data.danmuList;
        danmuListData.push({
            text: this.inputValue,
            color: '#fff000',
            time: 10
        })
        console.log(danmuListData)
        this.setData({
            danmuList: danmuListData
        })
    },

    findVideo: function(){
        var that = this;
        wx.chooseVideo({
            sourceType: ['album', 'camera'],                 //视频选择的来源
            compressed: true,                              //是否压缩所选择的视频文件
            maxDuration: 600,                            //拍摄视频最长拍摄时间，单位秒
            camera: 'back',                      // 默认拉起的是前置或者后置摄像头。部分 Android 手机下由于系统 ROM 不支持无法生效
            success: function(res){
                console.log(res) 
                // res.tempFilePath                 //选定视频的临时文件路径
                // res.duration                     //选定视频的时间长度
                // res.size                         //选定视频的数据量大小
                // res.height                       //返回选定视频的高度
                // res.width                        //返回选定视频的宽度
                that.setData({
                    src1 : res.tempFilePath
                })
            },
            
            fail: function(res){
                console.log(res)
            }
        })
    }
    


})