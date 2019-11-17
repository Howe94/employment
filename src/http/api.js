/* 
 * 接口统一集成模块
 */
import * as login from './moudules/login'
import * as user from './moudules/user'
import * as menu from './moudules/menu'
import * as information from './moudules/information'
import * as classInfo from './moudules/classInfo'
import * as employmentInf from './moudules/employmentInf'


// 默认全部导出
export default {
  login,
  user,
  menu,
  information,
  classInfo,
  employmentInf
}