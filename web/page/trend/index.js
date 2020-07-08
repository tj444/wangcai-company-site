import React,{useEffect ,useState} from 'react';
import { connect } from 'dva';
import './index.less';
import pageData from "./data.js"

function Trend(props) {

  // 彩票类型lotteryType
  const[lotteryTypeList , setLotteryTypeList]= useState(Object.keys(pageData))
  const[lotteryCheck , setLotteryCheck]= useState(0)
  // 页签类型
  const[tabTpyeList , setTabTpyeList]= useState([])
  const[tabCheck , setTabCheck]= useState(0)
  const[ifreamSrc , setIfreamSrc]= useState("")
  const changeLotteryType = (item,index)=>{
    setLotteryCheck(index)
    setTabTpyeList(pageData[item])
    changeTabTpye(pageData[item][0],0)
  }
  const changeTabTpye = (item,index)=>{
    setTabCheck(index)
    setIfreamSrc(item.link)

    
  
  }
  useEffect(props=>{
    changeLotteryType("双色球",0)
   },[])
  return (<div className="trend-box">
      <div className="leftBox">
        <div className="left_box_title">全部彩种</div>
        <ul>
          {lotteryTypeList && lotteryTypeList.map((item,index) => (
            <li key={index} onClick={() => changeLotteryType(item ,index)} className={(index ==lotteryCheck)?"active":"" }>
              {item}
            </li>
          ))}
         {/* <div>{JSON.stringify(tabTpyeList)}</div> */}
        </ul>
      </div>
      <div className="rightBox">
          <div className="right_box_title">
            <div >{lotteryTypeList[lotteryCheck]}图表走势</div>
          </div>
          <div className="tagList">
          
            {tabTpyeList && tabTpyeList.map((item,index) => (
              <div key={index} onClick={() => changeTabTpye(item ,index)} className={(index ==tabCheck)?"active":"" }>
                {item.name}
              </div>
            ))}
          </div>
          {ifreamSrc&&<div>
            <iframe 
              scrolling="yes"
              id="myIframe"
             src={ifreamSrc+"&width=960"}
             
              frameBorder="0"
              />
          </div>}
      </div>
  </div>);
}

Trend.getInitialProps = async ctx => {
  const newsId = __isBrowser__ ? ctx.match.params.id : ctx.params.id;
  await ctx.store.dispatch({ type: 'news/getData', payload: { id: newsId } });
};

const mapStateToProps = state => ({
  detail: state.news.detail,
});

export default connect(mapStateToProps)(Trend);
