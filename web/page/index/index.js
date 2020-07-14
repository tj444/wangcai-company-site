import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import { Link } from 'react-router-dom';
import QRCode from 'qrcode.react';
import moment from 'moment';
import './index.less';

const qrcode = 'https://apk.cdn.wcssq.cn/ssq/release/latest/ssq-p034.apk';

const baseList = [
  { name: '双色球', img: require('../../assets/images/双色球.png') },
  { name: '福彩3D', img: require('../../assets/images/3D.png') },
  { name: '七乐彩', img: require('../../assets/images/7乐彩.png') },
  { name: '大乐透', img: require('../../assets/images/大乐透.png') },
  { name: '排序3', img: require('../../assets/images/排列3.png') },
  { name: '排序5', img: require('../../assets/images/排列5.png') },
  { name: '七星彩', img: require('../../assets/images/七星彩.png') },
];

const defaultTag = '新闻资讯,中奖故事,自编新闻';

const LotteryItem = props => {
  const {
    name = '',
    img = '',
    result = '08,17,24,26,27,31,04',
    open_time = 1594300500,
    balance = '',
    issue = '',
    detail = [],
  } = props;
  const resultList = result.split(',');
  const totalPrice = Number((balance / 100000000).toFixed(2));
  const firstPrice = detail[0] && detail[0].count;
  const secondPrice = detail[1] && detail[1].count;
  const thirdPrice = detail[2] && detail[2].count;
  const oneBlue = name === '双色球' || name === '七乐彩';
  const twoBlue = name === '大乐透';
  return (
    <Link className="lotteryItem" to="/detail">
      <div className="lotteryBaseInfo">
        <img alt="" src={img} />
        <div style={{ flex: 1 }}>
          <div className="flexBetween1" style={{ marginBottom: '5px' }}>
            <p style={{ fontSize: '18px', color: '#333333', fontWeight: 500 }}>{name}开奖结果</p>
            <p className="detail">详情</p>
          </div>
          <div className="flexBetween1">
            <p style={{ fontSize: '14px', color: '#999999' }}>第{issue}期</p>
            <p style={{ fontSize: '14px', color: '#333333' }}>
              {moment(moment.unix(open_time)).format('YYYY/MM/DD HH:mm')}
            </p>
          </div>
        </div>
      </div>
      <div className="resultList">
        {resultList.map((v, i) => {
          const last = i === resultList.length - 1;
          const sLast = i === resultList.length - 2;
          let className = 'redBall';
          if (oneBlue && last) className = 'blueBall';
          if (twoBlue && (last || sLast)) className = 'blueBall';
          return (
            <div className={className} key={i}>
              {v}
            </div>
          );
        })}
      </div>
      <div className="flexAlignCenter">
        <div className="priceInfo">
          <p>中奖详情：</p>
          <div className="price_pool">
            <p>奖</p>
            <p>池：</p>
          </div>
        </div>
        <div style={{ textAlign: 'left' }}>
          <div className="priceNum">
            <p>
              一等奖：<span style={{ color: '#ED0004' }}>{firstPrice}</span>
            </p>
            <p style={{ margin: '0 30px' }}>
              二等奖：<span style={{ color: '#ED0004' }}>{secondPrice}</span>
            </p>
            <p>
              三等奖：<span style={{ color: '#ED0004' }}>{thirdPrice}</span>
            </p>
          </div>
          <span style={{ color: '#ED0004' }}>{totalPrice}亿</span>
        </div>
      </div>
    </Link>
  );
};

const InfoItem = props => {
  const { images = [], title = '', source = '', platform_pub_time = 0, description = '', setMask } = props;
  return (
    <div className="infoItem" onClick={() => setMask(true)}>
      <img alt="图片地址错误" src={images[0] || ''} />
      <div>
        <p className="title">{title}</p>
        <div className="descript">{description}</div>
        <p className="readMore">{'阅读详情 >'}</p>
        <p className="from">
          {source} {moment(moment.unix(platform_pub_time)).format('MM月DD日 HH:mm')}
        </p>
      </div>
    </div>
  );
};

function Page(props) {
  const { lotteries = [], infoTabs = [], tagList = [], tags = defaultTag } = props;
  const [selectTag, setSelectTag] = useState(tags);
  const [mask, setMask] = useState(false);

  console.log(tagList);

  useEffect(() => {}, []);

  const onChooseTags = tags => {
    // if (tags === selectTag) return;
    props.dispatch({ type: 'page/getTags', payload: { tags, pagelen: 4, page: 1 } });
    setSelectTag(tags);
  };

  let lotteryList = [];
  lotteries.map(v => {
    const { name = '' } = v;
    const data = baseList.find(item => item.name === name);
    if (data) {
      lotteryList.push({ ...data, ...v });
    }
  });
  return (
    <div className="page_body">
      <div className="bannerContent">
        <div className="banner1">
          <img alt="" src={require('../../assets/images/banner02.png')} />
        </div>
        <div className="banner2">
          <img alt="" src={require('../../assets/images/sbanner1.png')} />
        </div>
      </div>

      <div className="mainBody">
        <div className="right_box_title">
          <div>全国彩种开奖</div>
        </div>
        <div className="all_lottery">
          {lotteryList.map((v, i) => {
            return <LotteryItem {...v} key={i} />;
          })}
        </div>

        <div className="info_title">
          {infoTabs.map((v, i) => {
            const { value, title } = v;
            const selected = selectTag === value;
            return (
              <a
                href="javascript:void(0)"
                onClick={() => onChooseTags(value)}
                key={i}
                className={selected ? 'selectedInfo' : ''}
              >
                {title}
              </a>
            );
          })}
        </div>
        <div className="all_lottery">
          {tagList.map((v, i) => {
            return <InfoItem setMask={setMask} {...v} key={i} />;
          })}
        </div>
      </div>
      {mask && (
        <div style={{ width: '100%', height: '100%' }}>
          <div className="mask"></div>
          <div className="downloadContainer">
            <div className="downloadBg">
              <div className="downloadDiv">
                <QRCode
                  value={qrcode} // 生成二维码的内容
                  size={100} // 二维码的大小
                  fgColor="#000000" // 二维码的颜色
                />
              </div>
            </div>
            <img onClick={() => setMask(false)} alt="" src={require('../../assets/images/closeBtn.png')} />
          </div>
        </div>
      )}
    </div>
  );
}

Page.getInitialProps = async ctx => {
  const tagsTitle = __isBrowser__ ? ctx.match.params.tags : ctx.params.tags;
  await ctx.store.dispatch({ type: 'page/getData', payload: {} });
  await ctx.store.dispatch({
    type: 'page/getTags',
    payload: { tags: tagsTitle || defaultTag, pagelen: 4, page: 1, mode: 'OR' },
  });
};

export default connect(({ page }) => ({
  lotteries: page.lotteries,
  tagList: page.tagList,
  tags: page.tags,
  infoTabs: page.infoTabs,
}))(Page);
