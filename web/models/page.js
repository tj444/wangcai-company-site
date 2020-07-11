import axios from 'axios';

const getLottery  = async() =>{
  let data = (await axios.get("/api/getIndexData",{
    method: 'get',
    headers:{//自定义header
      "User-Agent": "xWangcai Browser",
    },
    dataType: 'json'
  })).data;
 return data;
}

const getTag  = async() =>{
  let data = (await axios.get("/api/getIndexTag",{
    method: 'get',
    headers:{//自定义header
      "User-Agent": "xWangcai Browser",
    },
    dataType: 'json'
  })).data;
 return data;
}

const getAllLottery = async ({ctx,isBrowser,...rest}) => {
  console.log(ctx,"@@@ ctx ");
  let data = {};
  // if(isBrowser){
  //   console.log(ctx.service,"@@@ ctx.service ");
  //   let a = ctx.service.api.index();
  //   console.log(a,"@@@ a ");
  //   await Promise.all([a]).then(res=>{
  //     data = res;
  //   })
  // }else{
  //   await getLottery().then(res =>{
  //     data = res;
  //   }).catch(error => {
  //     console.log(error);
  //   });
  // }
  await getLottery().then(res =>{
    data = res;
  }).catch(error => {
    console.log(error);
  });
  return Promise.resolve(data)
}

const getTagList = async ({ctx,isBrowser}) => {
  let data = {};
  // if(isBrowser){
  //   let a = ctx.service.api.getTag(rest);
  //   await Promise.all([a]).then(res=>{
  //     data = res;
  //   })
  // }else{
  //   await getTag().then(res =>{
  //     data = res;
  //   }).catch(error => {
  //     console.log(error);
  //   });
  // }
  await getTag().then(res =>{
    data = res;
  }).catch(error => {
    console.log(error);
  });
  return Promise.resolve(data)
}

export default {
  namespace: 'page',
  state: {
    news: [],
    allLottery:{},
    tagList:[],
  },
  reducers: {
    init(state, { payload }) {
      return {
        ...state,
        ...payload,
      }
    }
  },
  effects: {
    * getData ({ payload }, { call, put }) {
      const res = yield call(getAllLottery,payload)
      yield put({
        type: 'init',
        payload: {allLottery:res.data && res.data}
      })
    },

    * getTags ({ payload }, { call, put }) {
      const res = yield call(getTagList,payload)
      yield put({
        type: 'init',
        payload: {tagList:res.data && res.data}
      })
    }
  }

}
