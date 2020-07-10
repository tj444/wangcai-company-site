import axios from "axios"
const getData = async ({ id,ctx,isBrowser }) => {
    if(isBrowser){
        let axios1 = axios.get("/api/getForecastData",{
            params:{
                lottery_key:id,
                encrypt:false
            }
        })
        let axios2 =axios.get("/api/getForecastData/getItem",{
            params:{
                type:id,
        
            }
        })
        let c = await Promise.all([axios1,axios2])
        let res1 = c[0].data.data
        let res2 = c[1].data
        var newObj =  {};
        res2.category.forEach(item=>{
            newObj[item.id] = item.name
        })
        
        res1.forEach(item=>{
            item.category = newObj[item.category]
        })
        return Promise.resolve({
            itemList:res1
        })
    }else{
        let a = ctx.service.api.forecast(id)
        let b = ctx.service.api.forecastList(id)
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