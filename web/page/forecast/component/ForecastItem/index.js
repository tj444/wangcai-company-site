import React,{useEffect ,useState} from 'react';
import { connect } from 'dva';
import './index.less';


function ForecastItem(props) {

 
  useEffect(props=>{
   
   },[])
  return (<div className="ForecastItem">
    <div className="ForecastItem_title">
      <img src={require("../../../../assets/images/pot.png")}/>{props.itemInfo.category}
  
    </div>


    <div className="peopleGroup">
      {props.itemInfo.data&&props.itemInfo.data.map((item,index) => (
         <div className="peopleItem" key={index}>
           {(index==0&& <div><img src={require("../../../../assets/images/one.png")}/> </div> )}
           {(index==1&& <div><img src={require("../../../../assets/images/two.png")}/> </div> )}
           {(index==2&& <div><img src={require("../../../../assets/images/three.png")}/> </div> )}
           {(index==3&& <div><div className="peopleItemNumber">4</div></div> )}
           <div> 
              <div>
              <img className="userIcon"  src={item.icon}/>
              </div>
              <div className="user_Info">
                <div className="UserName">{item.master_name}</div>
                <div className="UserGet">最近连中{item.recent_hit}期</div>
              </div>
              
            </div>
           <div>  近{item.recent_result}</div>
        </div>
      ))}
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
