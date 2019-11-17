import axios from '../axios'
/**
 * 就业信息模块
 */
export const employmentInf = data => {
  if (data.type == "2") {
    console.log("所有的就业信息")
    return axios({
      url: '/employmentInf',
      method: 'get',
      data
    })
  }
  else if (data.type == "1") {
    console.log("已就业")
    return axios({
      url: '/alreadyEmployed',
      method: 'get',
      data
    })
  }
  else if (data.type == "0") {
    console.log("未就业")
    return axios({
      url: '/unemployed',
      method: 'get',
      data
    })
  }

}