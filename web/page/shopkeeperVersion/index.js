import React from 'react';
import { connect } from 'dva';
import './index.less';

function LotteryEdition(props) {
  return (
    <div className="lotteryEdition">
      <div className="lotteryEdition_banner">
       
        
          <img src={require("../../assets/images/banner02.png")}/>
       
      </div>
      <div className="content">
       <img src={require("../../assets/images/n1.png")}/>
      </div>
      <div className="content white">
        <img src={require("../../assets/images/n2.png")}/>
      </div>
      <div className="content">
        <img src={require("../../assets/images/n3.png")}/>
      </div>
      <div className="content white">
        <img src={require("../../assets/images/n4.png")}/>
      </div>
      <div className="foot_banner">
        <img src={require("../../assets/images/sfootbanner2.png")}/>
      </div>
        
    </div>
  );
}

LotteryEdition.getInitialProps = async ctx => {
  const newsId = __isBrowser__ ? ctx.match.params.id : ctx.params.id;
  await ctx.store.dispatch({ type: 'news/getData', payload: { id: newsId } });
};

const mapStateToProps = state => ({
  detail: state.news.detail,
});

export default connect(mapStateToProps)(LotteryEdition);
