import Mock from 'mockjs';
const employList = [];
var _sex = '男'
for(let i = 0; i <= 50; i++){
    employList.push(Mock.mock({
        id: Mock.Random.guid(),
        'stuNo|161541101-161548255': 1,
        stuName: Mock.Random.cname(),
        unifieSocialCreditCode: Mock.mock('@id'),
        unitName: '互联网金融与信息工程学院',
        jobName: '计算机科学与技术',
        occupationalType: '本科',
        'pay|5000-11000': 1,
        contractTime: Mock.mock('@date("yyyy-MM-dd")'),
        probation: '6个月',
        probationStartTime: Mock.mock('@date("yyyy-MM-dd")'),
        WorkingPlace: Mock.mock('@county(true)'),
        PAERelevance: Mock.Random.integer(0, 1),
        isEmployDifficulties: Mock.Random.integer(0, 1),
        isEmploy: Mock.Random.integer(0, 1)      
      }));
}
export { employList };