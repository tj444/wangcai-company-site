import axios from 'axios';
import { getAllLottery } from '@/services/page';

export default {
  namespace: 'page',
  state: {
    news: [],
    lotteries: [],
    tagList: [],
  },
  reducers: {
    init(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  effects: {
    *getData({ payload }, { call, put }) {
      const res = yield call(getAllLottery, payload);
      yield put({
        type: 'init',
        payload: { lotteries: res },
      });
    },

    *getTags({ payload }, { call, put }) {
      // const res = yield call(getTagList,payload)
      // yield put({
      //   type: 'init',
      //   payload: {tagList:res.data && res.data}
      // })
    },
  },
};
