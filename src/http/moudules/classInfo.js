import axios from '../axios'
/**
 * 系统登录模块
 */
// 登录
export const classInfo = data => {
    console.log(data.type)
    if (data.type == "3"){
        return axios({
            url: '/allclass',
            method: 'get',
            data
        })
    }else if(data.type == "0"){
        return axios({
            url: '/CSAT',
            method: 'get',
            data
        })
    }else if(data.type == "1"){
        return axios({
            url: '/IMAIS',
            method: 'get',
            data
        })
    }else if(data.type == "2"){
        return axios({
            url: '/Ecommerce',
            method: 'get',
            data
        })
    }
    
}