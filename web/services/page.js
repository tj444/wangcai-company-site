import axios from 'axios';

// 获取所有彩票信息
export function getAllLottery() {
  return axios
    .get(`/api/getIndexData`)
    .then(item => {
      console.log(item, '@@@@@getAllLottery');
      return item;
    })
    .catch(err => ({ err }));
}
