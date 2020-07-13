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


// 获取咨询列表
export async function getTagList(payload) {
  try {
    const res = await axios.get(`${baseUrl}/api/getIndexTag`, { params: { ...payload } });
    const data = res.data.data;
    return data;
  } catch (err) {
    return [];
  }
}
