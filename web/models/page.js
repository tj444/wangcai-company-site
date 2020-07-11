
import axios from 'axios';

const index  = async() =>{
  let data = (await axios.get("/api/getIndexData",{
    method: 'get',
    headers:{//自定义header
      "User-Agent": "xWangcai Browser",
    },
    dataType: 'json'
  })).data;
 return data;
}

const getAllLottery = async () => {
  let data = {};
  await index().then(res =>{
    data = res;
  }).catch(error => {
    console.log(error);
  });
  return Promise.resolve(data);
}

export default {
  namespace: 'page',
  state: {
    news: [],
    allLottery:{},
  },
  reducers: {
    init (state, { payload }) {
      console.log(payload,'@@@init')
      return {
        ...state,
        allLottery:payload.allLottery
      }
    }
  },
  effects: {
    * getData ({ payload }, { call, put }) {
      const res = yield call(getAllLottery,payload)
      console.log(res,'@@data')
      yield put({
        type: 'init',
        payload: {allLottery:res.data && res.data}
      })
    }
  }

}
