import Mock from 'mockjs'
var Random = Mock.Random;
export function Ecommerce () {
    return {
      // isOpen: false,
      url: 'http://localhost:8082/Ecommerce',
      type: 'get',
      data: {
        "status": "200",
        "desc": "处理成功",
        "data": [
            {
                classNo: '1615481',
                className: '电子商务1班',
                classNum: '50',
                'monitor': Random.cname(),
                monitorTel: '13229452259'
              }, {
                classNo: '1615482',
                className: '信电子商务2班',
                classNum: '50',
                monitor: Random.cname(),
                monitorTel: '13267465649'
              }
        ]
    }
    }
  }