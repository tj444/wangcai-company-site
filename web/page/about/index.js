import React from 'react';
import { connect } from 'dva';
import './index.less';

function About(props) {
  return (
    <div className="about">
       <div className="about_banner">
          <h2>关于旺彩双色球</h2>
          <p>旺彩双色球软件是一款专业的双色球工具软件，他是</p>
          <p>由北京掌控世代科技有限公司研发并发行的软件。</p>
          <p>开奖信息及时全面，</p>
          <p>走势图功能专业远超同类软件 。</p>
          <p>旺彩双色球在各大市场彩票类软件中排名前三！！！</p>
      </div>  
      <div className="about_info">
          <h2>关于我们</h2>
          <p>旺彩是彩票互联网服务领导者，服务于2亿彩民，满</p>
          <p>足彩民用户社交，工具需求。追求极致的产品体验，</p>
          <p>为用户做出激动人心的产品。</p>
          <div>
            <img src={require("../../assets/images/people.png")}/>
          </div>
      </div>      
      <div className="about_us">
          <h2>联系我们</h2>
          <p>地址：北京市海淀区上地东路一号院</p>
          <p>客服邮箱：zhangkongshidai@163.com</p>
      </div>      
      
    </div>
  );
}

About.getInitialProps = async ctx => {
  const newsId = __isBrowser__ ? ctx.match.params.id : ctx.params.id;
  await ctx.store.dispatch({ type: 'news/getData', payload: { id: newsId } });
};

const mapStateToProps = state => ({
  detail: state.news.detail,
});

export default connect(mapStateToProps)(About);
