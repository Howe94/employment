import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
// MockAdapter是一个模拟后台get的请求，es6语法
import { usersList } from './data/users';
import { stuList } from './data/studentInformation';
import { employList } from './data/stuEmployInformation';
let _employList = employList;
let _stuList = stuList;
export default {
    /**
     * mock bootstrap
     */
    bootstrap() {
      let mock = new MockAdapter(axios);
  
      // mock success request
      mock.onGet('/success').reply(200, {
        msg: 'success'
      });
  
      // mock error request
      mock.onGet('/error').reply(500, {
        msg: 'failure'
      });
  
      //登录
      mock.onPost('/login').reply(config => {
        let {userName, password} = JSON.parse(config.data);
        return new Promise((resolve, reject) => {
          let user = null;
          setTimeout(() => {
            let hasUser = usersList.some(u => {
              if (u.username === userName && u.password === password) {
                user = JSON.parse(JSON.stringify(u));
                user.password = undefined;
                return true;
              }
            });
  
            if (hasUser) {
              resolve([200, { code: 200, token: '4344323121398', msg: '请求成功', user }]);
            } else {
              resolve([200, { code: 500, msg: '账号或密码错误' }]);
            }
          }, 1000);
        });
      });

      //获取学生信息列表
    mock.onGet('/studentInformation').reply(config => {
        // console.log(config);
        //config.params放的是用户输入的name,params是user.vue中传递的
       let {type} = config.params;
       let stuList = _stuList.filter(data => {
        // console.log(data.name.indexOf(name))
        if (type && data.name.indexOf(type) == -1) return false;
        return true;
       });
       return new Promise((resolve, reject) => {
         setTimeout(() => {
           resolve([200, {
            stuList: stuList
           }]);
         }, 1000);
       });
     });
       //获取学生就业信息列表
    mock.onGet('/stuEmployInformation').reply(config => {
        console.log('+++++++++++config');
        console.log(config.params);
       let type = config.params + "";//type:2/1/0
       let employList = _employList.filter(data => {
        // console.log('data++++++++++')
        //     console.log(data.isEmploy.indexOf("1"))
         if (type && data.isEmploy.indexOf(type) == -1) return false;
         return true;
       });
       return new Promise((resolve, reject) => {
         setTimeout(() => {
           resolve([200, {
            employList: employList
           }]);
         }, 1000);
       });
     });




    }
}