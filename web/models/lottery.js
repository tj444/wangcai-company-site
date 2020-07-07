const mockData = {
    "shuangseqiu": { "id": 1 },
    "fucai3d": { "id": 2 },
    "qilecai": { "id": 3 },
    "daletou": { "id": 4 },
    "pailie3": { "id": 5 },
    "pailie5": { "id": 6 },
    "n7xingcai": { "id": 7 }
}

const getData = async ({ id }) => {    
    return Promise.resolve({
        detail: mockData[id]
    })
}

export default {
    namespace: 'lottery',
    state: {
        detial: ''
    },

    reducers: {
        init (state, { payload }) {
            console.log(payload)
            return {
                ...state,
                detail: payload.detail
            }
        }
    },

    effects: {
        * getData ({ payload }, { call, put }) {
            const data = yield call(getData, payload)
            yield put({
                type: 'init',
                payload: data
            })
        }
    }
}