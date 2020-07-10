
import { getAllLottery } from '../services/page';


export default {
  namespace: 'page',
  state: {
    news: []
  },
  reducers: {
    init (state, { payload }) {
      return {
        ...state,
      }
    }
  },
  effects: {
    * getData ({ payload }, { call, put }) {
      const data = yield call(getAllLottery)
      console.log(data,'@@data')
      yield put({
        type: 'init',
        payload: data
      })
    }
  }

}
