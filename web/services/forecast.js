import axios from 'axios';

// 获取所有彩票信息
export function getForecast(payload) {
  let axios1 = axios.get(`http://localhost:7001/api/getForecastData`, {
    params: {
      lottery_key: payload.id,
      encrypt: false,
    },
  })
  let axios2 = axios.get('http://localhost:7001/api/getForecastData/getItem', {
    params: {
      lottery_key: payload.id,
      encrypt: false,
    },
  })
  return Promise.all([axios1,axios2]).then(res=>{
    
    let res1 = res[0].data.data
      let res2 = res[1].data
      console.log(res2)
      var newObj =  {};
      res2.category.forEach(item=>{
          newObj[item.id] = item.name
      })
      
      res1.forEach(item=>{
          item.category = newObj[item.category]
      })
      return res1
  })
  // return axios
  //   .get(`http://localhost:7001/api/getForecastData`, {
  //     params: {
  //       lottery_key: payload.id,
  //       encrypt: false,
  //     },
  //   })
  //   .then(res => {
  //     return res.data.data;
  //   })
  //   .catch(err => ({ err }));
}
