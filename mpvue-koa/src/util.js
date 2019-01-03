// 工具函数库
import config from './config';
export function get(url){
    return new Promise((resolve,reject)=>{
        wx.request({
            url: config.host + url,
            success: function(res){
                if(res.statusCode == 200){
                    if (res.data.code == 0) {
                        resolve(res.data)
                    } else {
                        reject(res.data)
                    }
                }else{
                    reject(res.data)
                }  
            }
        })
    })
}

export function showSucccess(text){
    wx.showToast({
        title: text,
        icon: 'success',
    })
}
