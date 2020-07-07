import React from 'react';
import { connect } from 'dva';
import './index.less';

function ExpertsCategoryTypeTab(props) {
  return (
    <div className="card-nav">
      <div className="card-title-p40">
        <div className="card-title-text">
          全部彩种
        </div>
      </div>
      <ul className="card-body-nav">
        <li>双色球</li>
        <li>福彩3D</li>
        <li>超级大乐透</li>
        <li>排列五</li>
        <li>七乐彩</li>
        <li>排列三</li>
        <li>七星彩</li>
      </ul>
    </div>
  );
}


function Lottery(props) {
    console.log(props)
    var data = props.detail
    return (
      <div className="lottery_container">
        <div className="lottery_tab">
          <ExpertsCategoryTypeTab />
        </div>
        <div className="lottery_content">
          { data.id }
        </div>
      </div>
    )
}

Lottery.getInitialProps = async ctx => {
    const lotteryId = __isBrowser__ ? ctx.match.params.type : ctx.params.type;
    await ctx.store.dispatch({ type: 'lottery/getData', payload: { id: lotteryId } });
};

const mapStateToProps = state => ({
  detail: state.lottery.detail,
});

export default connect(mapStateToProps)(Lottery);
