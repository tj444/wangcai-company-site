import axios from 'axios';
let baseUrl = process.env.NODE_ENV == 'development' ? 'http://localhost:7001' : process.env.SITE_BASE;
// 获取所有彩票信息
export async function getForecast(payload) {
  console.log(baseUrl)
  console.log(process.env.SITE_BASE)
  let data = [];
  try {
    const res1 = await axios.get(`${baseUrl}/api/getForecastData`, {
      params: {
        lottery_key: payload.id,
        encrypt: false,
      },
    });

    data = res1.data

    const res2 = await axios.get(`${baseUrl}/api/getForecastData/getItem`, {
      params: {
        lottery_key: payload.id,
        encrypt: false,
      },
    });

    const cateItems = res2.data.category;

    var dic = {};
    for (const v of cateItems) {
      dic[v.id] = v.name;
    }

    for (const v of data) {
      v.category = dic[v.category];
    }
    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
}
