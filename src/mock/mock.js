import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
// MockAdapter是一个模拟后台get的请求，es6语法
import {
  usersList
} from './data/users';
import {
  stuList
} from './data/studentInformation';
import {
  employList
} from './data/stuEmployInformation';
import {
  classList
} from './data/classInformation'
let _classList = classList;
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
      let {
        userId,
        password
      } = JSON.parse(config.data);
      return new Promise((resolve, reject) => {
        let user = null;
        setTimeout(() => {
          let hasUser = usersList.some(u => {
            if (u.userId === userId && u.password === password) {
              user = JSON.parse(JSON.stringify(u));
              user.password = undefined;
              return true;
            }
          });

          if (hasUser) {
            resolve([200, {
              code: 200,
              token: '4344323121398',
              msg: '请求成功',
              user
            }]);
          } else {
            resolve([200, {
              code: 500,
              msg: '账号或密码错误'
            }]);
          }
        }, 1000);
      });
    });

    //获取学生信息列表
    mock.onGet('/studentInformation').reply(config => {
      // console.log(config);
      //config.params放的是用户输入的name,params是user.vue中传递的
      let {
        name
      } = config.params;
      let stuList = _stuList.filter(data => {
        if (name && data.stuName.indexOf(name) != -1) return false;
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
      let {type} = config.params; //type:2/1/0
      let employList = _employList.filter(data => {
        // console.log('data++++++++++')
        // console.log(type)
        // console.log(data.isEmploy)
        if (data.isEmploy == type || type == 2) return true;
        return false;
      });
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            employList: employList
          }]);
        }, 1000);
      });
    });

    //获取班级信息列表
    mock.onGet('/classInformation').reply(config => {
      let {type} = config.params; //type:2/1/0
      let classList = _classList.filter(data => {
        // console.log('data++++++++++')
        // console.log(type)
        // console.log(data.isEmploy)
        if (data.professionNo == type || type == 3) return true;
        return false;
      });
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            classList: classList
          }]);
        }, 1000);
      });
    });


    //更新个人基本信息
    mock.onPost('/editStuInfo').reply(config => {
      let {
        id,stuNo,stuName,sex,idCard,department,profession,education,politicalStatus,biogenicLand,graduationTime,stuTel,familyContact,homeTel,homeAddress
      } = JSON.parse(config.data).params;
      _stuList.some(data => {
        if(data.id == id) {
          data.stuNo = stuNo;
          data.stuName = stuName;
          data.sex = sex;
          data.idCard = idCard;
          data.department = department;
          data.profession = profession;
          data.education = education;
          data.politicalStatus = politicalStatus;
          data.biogenicLand = biogenicLand;
          data.graduationTime = graduationTime;
          data.stuTel = stuTel;
          data.familyContact = familyContact;
          data.homeTel = homeTel;
          data.homeAddress = homeAddress;
          return true;
        }
      });
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            msg: '修改成功'
          }]);
        }, 500);
      });
    });

    //删除某个人的个人信息
    mock.onPost('/delStuInfo').reply(config => {
      let stuNo = JSON.parse(config.data).params.stuNo;
      _stuList = _stuList.filter(data => data.stuNo !== stuNo)
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            msg: '删除成功'
          }]);
        }, 500);
      });
    });

    //添加个人基本信息
    mock.onPost('/addStuInfo').reply(config => {
      let newStuInfo = JSON.parse(config.data).params;
      _stuList.push(newStuInfo);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            msg: '修改成功'
          }]);
        }, 500);
      });
    });


  }
}
