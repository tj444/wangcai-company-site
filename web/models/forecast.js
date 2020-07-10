const getData = async ({ id,ctx }) => {
    let a = ctx.service.api.forecast()
    let b = ctx.service.api.forecastList()
    let res1=[]
    let res2=[]
    await  Promise.all([a,b]).then(res=>{
         res1 = res[0].data
         res2 = res[1]
        
        var newObj =  {};
        res2.category.forEach(item=>{
            newObj[item.id] = item.name
        })
        
        res1.forEach(item=>{
            item.category = newObj[item.category]
        })
    })
    return Promise.resolve({
        itemList:res1
    })
   
}
export default {
    namespace: 'forecast',
    state: {
        itemList: []
    },
    reducers: {
        init (state, { payload }) {
        return {
            ...state,
            itemList: payload.itemList
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