import axios from 'axios';
let baseUrl = process.env.NODE_ENV == 'development' ? 'http://localhost:7001' : '';

// 获取所有彩票信息
export async function getAllLottery() {
  try {
    const res = await axios.get(`${baseUrl}/api/getIndexData`);
    const data = res.data.data.quanguo;
    return data;
  } catch (err) {
    return [];
  }
}
