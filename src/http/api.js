/* 
 * 接口统一集成模块
 */

/**
 * 2019-11-18 11:51 重新编写接口
 */
import axios from 'axios'
let bashPath = ''

export const requestLogin = params => { return axios.post(`${bashPath}/login`, params).then(res => res.data); };

//  获取学生基本信息列表

export const getStuList = params => { return axios.get(`${bashPath}/studentInformation`, { params: params }); };

//获取学生就业信息
export const getEmployList = params => { return axios.get(`${bashPath}/stuEmployInformation`, { params: params }); };


//获取专业信息
export const getclassList = params => { return axios.get(`${bashPath}/classInformation`, { params: params }); };

//更新某个同学的个人信息
export const updateStuInfo = params => { return axios.post(`${bashPath}/editStuInfo`,  { params: params.params }); };

//删除某个同学的个人信息handleDelete
export const deleteStuInfo = params => { return axios.post(`${bashPath}/delStuInfo`,  { params: params.params}); };

//添加同学个人信息
export const addNewStu = params => { return axios.post(`${bashPath}/addStuInfo`,  { params: params.params}); };