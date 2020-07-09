import React,{useEffect ,useState} from 'react';
import { connect } from 'dva';
import './index.less';


function ForecastItem(props) {
  console.log(props.itemInfo)
 
  useEffect(props=>{
   
   },[])
  return (<div className="ForecastItem">
    <div className="ForecastItem_title">
      <img src={require("../../../../assets/images/pot.png")}/>{props.itemInfo.category}
  
    </div>
  </div>);
}

ForecastItem.getInitialProps = async ctx => {
  const newsId = __isBrowser__ ? ctx.match.params.id : ctx.params.id;
  await ctx.store.dispatch({ type: 'news/getData', payload: { id: newsId } });
};

const mapStateToProps = state => ({
  detail: state.news.detail,
});

export default connect(mapStateToProps)(ForecastItem);
