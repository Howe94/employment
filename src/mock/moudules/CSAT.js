import Mock from 'mockjs'
var Random = Mock.Random;
export function CSAT () {
    return {
      // isOpen: false,
      url: 'http://localhost:8082/CSAT',
      type: 'get',
      data: {
        "status": "200",
        "desc": "处理成功",
        "data": [
            {
                classNo: '1615431',
                className: '计算机科学与技术1班',
                classNum: '53',
                monitor: '庄家禾',
                monitorTel: '13229451649'
              }, {
                classNo: '1615432',
                className: '计算机科学与技术2班',
                classNum: '53',
                monitor: '豪宗超',
                monitorTel: '13229451649'
              }, {
                classNo: '1615433',
                className: '计算机科学与技术3班',
                classNum: '51',
                monitor: Random.cname(),
                monitorTel: '13229451349'
              }, {
                classNo: '1615434',
                className: '计算机科学与技术4班',
                classNum: '50',
                monitor: Random.cname(),
                monitorTel: '13229465649'
              }
        ]
    }
    }
  }