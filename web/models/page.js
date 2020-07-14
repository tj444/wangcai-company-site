import { getAllLottery, getTagList } from '@/services/page';

export default {
  namespace: 'page',
  state: {
    news: [],
    lotteries: [],
    tagList: [],
    rankList: [],
    tags: '新闻资讯,中奖故事,自编新闻',
    infoTabs: [
      { title: '最新资讯', value: '新闻资讯,中奖故事,自编新闻' },
      { title: '双色球', value: '双色球' },
      { title: '大乐透', value: '大乐透' },
      { title: '3D', value: '福彩3D' },
      { title: '排列3/5', value: '排列3,排列5' },
    ],
  },
  reducers: {
    init(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
    onTagsLoad(state, { payload }) {
        console.log(1111)
      return {
        ...state,
        tagList: payload,
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
      // const { tags } = payload;
      // yield put({ type: 'init', payload: { tags } });
      const res = yield call(getTagList, payload);
      yield put({ type: 'onTagsLoad', payload: res });
    },
  },
};
