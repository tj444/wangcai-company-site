import React from 'react';
import { connect } from 'dva';
import './news.less';

function News() {
  var data = [
    { "id": 1, "title": "男子揽大乐透1925万充满感激", "content": "来自浙江杭州的彩民王先生凭借一张“5+7”复式追票，收获大乐透1925万大奖...", "author_name": "新彩网", "date": "06月30日  07:02","url": "http://www.310win.com/daletou/info_t2i282433.html" },
    { "id": 2, "title": "男子揽大乐透1925万充满感激", "content": "来自浙江杭州的彩民王先生凭借一张“5+7”复式追票，收获大乐透1925万大奖...", "author_name": "新彩网", "date": "06月30日  07:02","url": "http://www.310win.com/daletou/info_t2i282433.html" },
    { "id": 3, "title": "男子揽大乐透1925万充满感激", "content": "来自浙江杭州的彩民王先生凭借一张“5+7”复式追票，收获大乐透1925万大奖...", "author_name": "新彩网", "date": "06月30日  07:02","url": "http://www.310win.com/daletou/info_t2i282433.html" },
    { "id": 4, "title": "男子揽大乐透1925万充满感激", "content": "来自浙江杭州的彩民王先生凭借一张“5+7”复式追票，收获大乐透1925万大奖...", "author_name": "新彩网", "date": "06月30日  07:02","url": "http://www.310win.com/daletou/info_t2i282433.html" },
    { "id": 5, "title": "男子揽大乐透1925万充满感激", "content": "来自浙江杭州的彩民王先生凭借一张“5+7”复式追票，收获大乐透1925万大奖...", "author_name": "新彩网", "date": "06月30日  07:02","url": "http://www.310win.com/daletou/info_t2i282433.html" },
    { "id": 6, "title": "男子揽大乐透1925万充满感激", "content": "来自浙江杭州的彩民王先生凭借一张“5+7”复式追票，收获大乐透1925万大奖...", "author_name": "新彩网", "date": "06月30日  07:02","url": "http://www.310win.com/daletou/info_t2i282433.html" },
    { "id": 7, "title": "男子揽大乐透1925万充满感激", "content": "来自浙江杭州的彩民王先生凭借一张“5+7”复式追票，收获大乐透1925万大奖...", "author_name": "新彩网", "date": "06月30日  07:02","url": "http://www.310win.com/daletou/info_t2i282433.html" },
    { "id": 8, "title": "男子揽大乐透1925万充满感激", "content": "来自浙江杭州的彩民王先生凭借一张“5+7”复式追票，收获大乐透1925万大奖...", "author_name": "新彩网", "date": "06月30日  07:02","url": "http://www.310win.com/daletou/info_t2i282433.html" },
  ]

  return (
    <div className="news">
      <div className="news_header">
        <div className="title">最新资讯</div>
        <div className="subs">
          <span className="sub">双色球</span>
          <span className="sub">大乐透</span>
          <span className="sub">3D</span>
          <span className="sub">排列3/5</span>
          <span className="sub">七乐彩</span>
        </div>
      </div>
      
      <div className="news_body">
        {
          data && data.map(item => (
            <div className="news_item" key={item.id}>
              <img className="image" src="a.png" />
              <div className="content">
                <div className="title">{item.title}</div>
                <div className="text">{item.content}</div>
                {/* <div className="detial">阅读详情 &gt;</div> */}
                <a className="detial" href={item.url} >阅读详情 &gt;</a>
                <div className="date">{item.author_name + "   " + item.date}</div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

News.getInitialProps = async ctx => {
  console.log(__isBrowser__ ? ctx.match.params : ctx.params)
  const newsId = __isBrowser__ ? ctx.match.params.id : ctx.params.id;
  await ctx.store.dispatch({ type: 'news/getData', payload: { id: newsId } });
};

const mapStateToProps = state => ({
  detail: state.news.detail,
});

export default connect(mapStateToProps)(News);
