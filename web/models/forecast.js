import axios from 'axios';
import { getForecast } from '@/services/forecast';
export default {
  namespace: 'forecast',
  state: {
    itemList: [],
    typeList: [
      { name: '双色球', value: 'shuangseqiu' },
      { name: '大乐透', value: 'daletou' },
      { name: '福彩3d', value: 'fucai3d' },
      { name: '排列三', value: 'pailie3' },
      { name: '七乐彩', value: 'qilecai' },
    ],
    typeId: 'shuangseqiu',
  },
  reducers: {
    init(state, { payload }) {
      return {
        ...state,
        itemList: payload,
      };
    },
    setTypeId(state, { payload }) {
      return {
        ...state,
        typeId: payload.id,
      };
    },
  },
  effects: {
    *getData({ payload }, { call, put }) {
      yield put({ type: 'setTypeId', payload: payload });
      const data = yield call(getForecast, payload);
      yield put({ type: 'init', payload: data });
    },
  },
};