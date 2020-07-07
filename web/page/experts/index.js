import React from 'react';
import { connect } from 'dva';
import './index.less';
import DetailsList from './details';

// tab
function ExpertsCategoryTypeTab(props) {
  return (
    <div className="card-nav">
      <div className="card-title-p40">
        <div className="card-title-text">
          全部专家
        </div>
      </div>
      <ul className="card-body-nav">
        <li>双色球专家</li>
        <li>福彩3D专家</li>
        <li>超级大乐透专家</li>
        <li>排列五专家</li>
        <li>七乐彩专家</li>
        <li>排列三专家</li>
        <li>七星彩专家</li>
      </ul>
    </div>
  );
}

// TODO: 缓存最近选中的标签及其数据到上层 state
function Experts(props) {
  console.log(props);
  return <div className="experts-container">
    <div className="experts-left">
      <ExpertsCategoryTypeTab />
    </div>
    <div className="experts-right">
      <div className="experts-grid">
        <DetailsList />
        <DetailsList />
        <DetailsList />
        <DetailsList />
        <DetailsList />
        <DetailsList />
      </div>
    </div>
    <div id="placeholder">&nbsp;</div>
  </div >;
}

Experts.getInitialProps = async ctx => {
  const newsId = __isBrowser__ ? ctx.match.params.id : ctx.params.id;
  await ctx.store.dispatch({ type: 'news/getData', payload: { id: newsId } });
};

const mapStateToProps = state => ({
  detail: state.news.detail,
});

export default connect(mapStateToProps)(Experts);
