import React from 'react';
import './lottery.less';
import { connect } from 'dva';
import { Link } from 'react-router-dom';


Date.prototype.format = function(format) {
  var date = {
         "M+": this.getMonth() + 1,
         "d+": this.getDate(),
         "h+": this.getHours(),
         "m+": this.getMinutes(),
         "s+": this.getSeconds(),
         "q+": Math.floor((this.getMonth() + 3) / 3),
         "S+": this.getMilliseconds()
  };
  if (/(y+)/i.test(format)) {
         format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  for (var k in date) {
         if (new RegExp("(" + k + ")").test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length == 1
                       ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
         }
  }
  return format;
}

function formartDate(unixtime) {
  var unixTimestamp = new Date(unixtime* 1000);
  return unixTimestamp.format("yyyy/MM/dd hh:mm");
}

function Content() {
  var data = [
    { "id": 1, "name": "双色球开奖结果", "num": 2005123, "date": 1594116081, "balls":[ 3, 5, 21, 6, 22, 50], "img": "1.png", "type": "shuangseqiu" },
    { "id": 2, "name": "福彩3D开奖结果", "num": 5152123, "date": 1594116081, "balls":[ 3, 5, 21, 6, 22, 50], "img": "1.png", "type": "fucai3d" },
    { "id": 3, "name": "七乐彩开奖结果", "num": 8230231, "date": 1594116081, "balls":[ 3, 5, 21, 6, 22, 50], "img": "1.png", "type": "qilecai" },
    { "id": 4, "name": "超级大乐透开奖", "num": 1928423, "date": 1594116081, "balls":[ 3, 5, 21, 6, 22, 50], "img": "1.png", "type": "daletou" },
    { "id": 5, "name": "排列三开奖结果", "num": 4839202, "date": 1594116081, "balls":[ 3, 5, 21, 6, 22, 50], "img": "1.png", "type": "pailie3" },
    { "id": 6, "name": "排列五开奖结果", "num": 1892903, "date": 1594116081, "balls":[ 3, 5, 21, 6, 22, 50], "img": "1.png", "type": "pailie5" },
    { "id": 7, "name": "七星彩开奖结果", "num": 2020058, "date": 1594116081, "balls":[ 3, 5, 21, 6, 22, 50], "img": "1.png", "type": "n7xingcai" },
  ]

  return (
    <ul className="lottery_body">
      {
        data && data.map(item => (
          <li key={item.id}>
            <div className="item_1">
              <div className="item_1_1">
                <img src={item.img}></img>
              </div>
              <div className="item_1_2">
                <div className="item_1_2_1">
                  <div className="item_1_2_1_1">{item.name}</div>
                  <Link className="item_1_2_1_2" to={"/lottery/" + item.type}>详情</Link>
                </div>
                <div className="item_1_2_2">
                  <div className="item_1_2_2_1">第{item.num}期</div>
                  <div className="item_1_2_2_2">{formartDate(item.date)}</div>
                </div>
              </div>
            </div>
            <div className="item_2">
              {
                item.balls && item.balls.map((ball, idx) => (
                  <div className="ball" key={idx.toString()}>
                    <div className="ball_text">{ ball.toString() }</div>
                  </div>
                ))
              }
            </div>
            <div className="item_3">
              <div className="item_3_1">中奖详情：</div>
              <div className="item_3_2">一等奖：</div>
              <div className="item_3_3">3</div>
              <div className="item_3_2">二等奖：</div>
              <div className="item_3_3">8</div>
              <div className="item_3_2">三等奖：</div>
              <div className="item_3_3">20</div>
            </div>
            <div className="item_4">
              <div className="item_4_1">奖&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;池：</div>
              <div className="item_4_2">12.23亿</div>
            </div>
          </li>
        ))
      }
    </ul>
  )
}

function Lottery() {
  return (
    <div className="lottery">
      <div className="lottery_header">
        <div className="header_bg"></div>
        <div className="triangle"></div>
        <div className="header_title">全国彩种开奖</div>
      </div>
      <div className="header_line"></div>

      <Content />
    </div>
  );
}

Lottery.getInitialProps = async ctx => {
  console.log(__isBrowser__ ? ctx.match.params : ctx.params)
  const newsId = __isBrowser__ ? ctx.match.params.id : ctx.params.id;
  await ctx.store.dispatch({ type: 'lottery/getData', payload: { id: newsId } });
};

const mapStateToProps = state => ({
  detail: state.news.detail,
});

export default connect(mapStateToProps)(Lottery);