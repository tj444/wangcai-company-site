import React,{useEffect ,useState} from 'react';
import { Link } from 'react-router-dom';
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

 let typeId="shuangseqiu"

  // 选中值
  const[lotteryCheck , setLotteryCheck]= useState(typeId)
  // 列表值
  const[itemList , setitemList]= useState(props.itemList)

  
  
  useEffect(props=>{
    
   },[])
  return (<div className="forecast-box">
    <div className="leftBox">
      <div className="left_box_title">全部彩种</div>
      <ul>
        {lotteryTypeList && lotteryTypeList.map((item,index) => (
          <li key={index} className={(item.value ==lotteryCheck)?"active":""} >
              <Link to={`/forecast/${item.value}`}>
                <span > {item.name}</span>
              </Link>
           
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

  const typeId = __isBrowser__ ? ctx.match.params.typeId : ctx.params.typeId;
  // console.log(typeId)
  await ctx.store.dispatch({type:'forecast/getData', payload: { id: typeId,ctx:ctx,isBrowser:__isBrowser__ }});
};

const mapStateToProps = state => ({
  itemList: state.forecast.itemList,
});

export default connect(mapStateToProps)(Forecast);
