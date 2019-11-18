import Mock from 'mockjs'
var Random = Mock.Random;
export function IMAIS () {
    return {
      // isOpen: false,
      url: 'http://localhost:8082/IMAIS',
      type: 'get',
      data: {
        "status": "200",
        "desc": "处理成功",
        "data": [
             {
                classNo: '1615411',
                className: '信息管理与信息管理1班',
                classNum: '50',
                monitor: Random.cname(),
                monitorTel: '13229452259'
              }, {
                classNo: '1615412',
                className: '信息管理与信息管理2班',
                classNum: '50',
                monitor: Random.cname(),
                monitorTel: '13267465649'
              }
        ]
    }
    }
  }