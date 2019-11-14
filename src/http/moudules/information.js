import axios from '../axios'
/**
 * 系统登录模块
 */
// 登录
export const information = data => {
    return axios({
        url: '/information',
        method: 'get',
        data
    })
}