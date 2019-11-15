import axios from '../axios'
/**
 * 系统登录模块
 */
// 登录
export const classInfo = data => {
    return axios({
        url: '/classInfo',
        method: 'get',
        data
    })
}