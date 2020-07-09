import React,{useEffect ,useState} from 'react';
import { connect } from 'dva';
import axios from "axios"
import './index.less';
import { getDate } from 'date-fns';
import ForecastItem from "./component/ForecastItem";

function Forecast(props) {

  // 彩票类型lotteryType
  const[lotteryTypeList , setLotteryTypeList]= useState([
    {name:"双色球",value:"shuangseqiu"},
    {name:"大乐透",value:"daletou"},
    {name:"福彩3d",value:"fucai3d"},
    {name:"排列三",value:"pailie3"},

    {name:"七乐彩",value:"qilecai"},

  ])
  // 选中值
  const[lotteryCheck , setLotteryCheck]= useState(0)
  // 列表值
  const[itemList , setitemList]= useState([])
  const getDate = ()=>{
    
    let axios1 = axios.get("/api/getForecastData",{
      params:{
        lottery_key:lotteryTypeList[lotteryCheck].value,
        encrypt:false
      }
    })
    let axios2 =axios.get("/api/getForecastData/getItem",{
      params:{
        type:lotteryTypeList[lotteryCheck].value,
 
      }
    })
    Promise.all([axios1,axios2]).then(res=>{
     
      let res1 = res[0].data.data
      let res2 = res[1].data
      
      var newObj =  {};
      res2.category.forEach(item=>{
        newObj[item.id] = item.name
      })
     
      res1.forEach(item=>{
        item.category = newObj[item.category]
      })
      console.log(res1)
      setitemList(res1)
 
    }).catch(err=>{
      console.log(err)
    })
  }
  // 获取数据

  const changeLotteryType = (item,index)=>{
    setLotteryCheck(index)
    getDate()
  }
  useEffect(props=>{
    changeLotteryType({name:"双色球",value:"shuangseqiu"},0)
   },[])
  return (<div className="forecast-box">
    <div className="leftBox">
      <div className="left_box_title">全部彩种</div>
      <ul>
        {lotteryTypeList && lotteryTypeList.map((item,index) => (
          <li key={index} onClick={() => changeLotteryType(item ,index)} className={(index ==lotteryCheck)?"active":"" }>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
    <div className="right_box">
      {itemList && itemList.map((item,index)=>(
        
        <ForecastItem key={index} itemInfo={item}></ForecastItem>
      ))}
    </div>
  </div>);
}

Forecast.getInitialProps = async ctx => {
  const newsId = __isBrowser__ ? ctx.match.params.id : ctx.params.id;
  await ctx.store.dispatch({ type: 'news/getData', payload: { id: newsId } });
};

const mapStateToProps = state => ({
  detail: state.news.detail,
});

export default connect(mapStateToProps)(Forecast);
