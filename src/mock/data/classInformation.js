import Mock from 'mockjs';
const classList = [];
var _sex = '男'
for(let i = 0; i <= 50; i++){
    classList.push(Mock.mock({
        id: Mock.Random.guid(),
        'classNo|1615411-1615482': 1,
        className: Mock.Random.cname(),
        'professionNo|0-2': 1,
        professionName: Mock.Random.cname(),
        'classNum|45-55': 1,
        monitor: Mock.Random.cname(),
        'monitorTel|13000000000-19900000000': 1440191734422   
      }));
}
export { classList };