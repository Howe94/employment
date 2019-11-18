import Mock from 'mockjs'
import * as login from './moudules/login'
import * as user from './moudules/user'
import * as menu from './moudules/menu'
import * as information from './moudules/information'
import * as allclass from './moudules/allclass'
import * as employmentInf from './moudules/employmentInf'
import * as alreadyEmployed from './moudules/alreadyEmployed'
import * as unemployed from './moudules/unemployed'
import * as CSAT from './moudules/CSAT'
import * as IMAIS from './moudules/IMAIS'
import * as Ecommerce from './moudules/Ecommerce'

// 1. 开启/关闭[业务模块]拦截, 通过调用fnCreate方法[isOpen参数]设置.
// 2. 开启/关闭[业务模块中某个请求]拦截, 通过函数返回对象中的[isOpen属性]设置.
fnCreate(login, true)
fnCreate(user, true)
fnCreate(menu, true)
fnCreate(information, true)
fnCreate(allclass, true)
fnCreate(employmentInf, true)
fnCreate(alreadyEmployed, true)
fnCreate(unemployed, true)
fnCreate(CSAT, true)
fnCreate(IMAIS, true)
fnCreate(Ecommerce,true)

/**
 * 创建mock模拟数据
 * @param {*} mod 模块
 * @param {*} isOpen 是否开启?
 */
function fnCreate (mod, isOpen = true) {
  if (isOpen) {
    for (var key in mod) {
      ((res) => {
        if (res.isOpen !== false) {
          Mock.mock(new RegExp(res.url), res.type, (opts) => {
            opts['data'] = opts.body ? JSON.parse(opts.body) : null
            delete opts.body
            console.log('\n')
            console.log('%cmock拦截, 请求: ', 'color:blue', opts)
            console.log('%cmock拦截, 响应: ', 'color:blue', res.data)
            return res.data
          })
        }
      })(mod[key]() || {})
    }
  }
}