import Mock from 'mockjs';
const stuList = [];
var _sex = '男'
for(let i = 0; i <= 50; i++){
    if(Mock.Random.integer(0, 1) == 0){
        _sex = '女'
    }
    stuList.push(Mock.mock({
        id: Mock.Random.guid(),
        'stuNo|161541101-161548255': 1,
        stuName: Mock.Random.cname(),
        sex: _sex,
        idCard: Mock.mock('@id'),
        department: '互联网金融与信息工程学院',
        profession: '计算机科学与技术',
        education: '本科',
        politicalStatus: '团员',
        biogenicLand: Mock.mock('@county(true)'),
        graduationTime: '2020年06月',
        'stuTel|13000000000-19900000000': 1440191734422,
        familyContact: Mock.Random.cname(),
        'homeTel|13000000000-19900000000': 1440191734422,
        homeAddress: Mock.mock('@county(true)'),        
      }));
}
export { stuList };