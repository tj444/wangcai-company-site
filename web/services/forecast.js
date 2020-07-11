import axios from 'axios';

// 获取所有彩票信息
export function getForecast(payload) {
  return axios
    .get(`http://localhost:7001/api/getForecastData`, {
      params: {
        lottery_key: payload.id,
        encrypt: false,
      },
    })
    .then(res => {
      return res.data.data;
    })
    .catch(err => ({ err }));
}
