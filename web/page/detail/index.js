import React, { useState } from "react";
import { connect } from "dva";
import { Link } from "react-router-dom";
import QRCode from "qrcode.react";
import moment from "moment";
import { useHistory } from "react-router-dom";
import "./index.less";

const qrcode = "https://apk.cdn.wcssq.cn/ssq/release/latest/ssq-p034.apk";
const newInfo = "新闻资讯,中奖故事,自编新闻";
let first = true;

const baseList = [
  { name: "双色球", img: require("../../assets/images/shuangseqiu.png") },
  { name: "福彩3D", img: require("../../assets/images/3D.png") },
  { name: "七乐彩", img: require("../../assets/images/7lecai.png") },
  { name: "大乐透", img: require("../../assets/images/daletou.png") },
  { name: "排列3", img: require("../../assets/images/pailie3.png") },
  { name: "排列5", img: require("../../assets/images/pailie5.png") },
  { name: "七星彩", img: require("../../assets/images/qixingcai.png") },
];

const valueName = {
  shuangseqiu: "双色球",
  daletou: "大乐透",
  fucai3d: "福彩3D",
  qilecai: "七乐彩",
  n7xingcai: "七星彩",
  pailie3: "排列3",
  pailie5: "排列5",
};

const LotteryDetail = (props) => {
  const {
    name = "",
    img = "",
    result = "",
    open_time = 1594300500,
    balance = "",
    issue = "",
    sales = "",
    detail = [],
  } = props;
  const resultList = result.split(",");
  const totalPrice = Number((balance / 100000000).toFixed(2));
  return (
    <div className="lottery-detail-box">
      <div className="lottery-issue">
        <div className="left-content">
          <div className="img">
            <img alt="" src={img} />
          </div>
          <p>第{issue}期</p>
        </div>
        <div className="right-content">
          开奖日期：{moment(moment.unix(open_time)).format("YYYY年MM月DD日")}
        </div>
      </div>
      <div className="lottery-detail-info">
        <p className="name">
          {name}第{issue}期 开奖详情
        </p>
        <p className="time">
          开奖时间：{moment(moment.unix(open_time)).format("YYYY-MM-DD HH:mm")}
        </p>
        <div className="lottery-result-list">
          {resultList.map((v, i) => {
            return (
              <div className={"redBall"} key={i}>
                {v}
              </div>
            );
          })}
        </div>
        <div className="lottery-sales">
          <p>
            <span className="point"></span>奖池：{totalPrice}亿元
          </p>
          <p>销售额：{sales}元</p>
        </div>

        <p className="detail-title">中奖详情</p>
        <table className="modbus">
          <thead>
            <tr>
              <th>奖项</th>
              <th>中奖注数（注）</th>
            </tr>
          </thead>
          <tbody>
            {detail.length > 0 &&
              detail.map((v, i) => {
                const { count = "", name = "" } = v;
                return (
                  <tr key={i}>
                    <th>{name}</th>
                    <th>{count}</th>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const InfoItem = (props) => {
  const {
    images = [],
    title = "",
    source = "",
    platform_pub_time = 0,
    description = "",
    setMask,
  } = props;
  return (
    <div className="info-item" onClick={() => setMask(true)}>
      <div className="info-wrap">
        <img className="info-pic" alt="图片地址错误" src={images[0] || ""} />
        <div className="info-content">
          <p className="title">{title}</p>
          <div className="desc">{description}</div>
          <p className="readmore">{"阅读详情 >"}</p>
          <p className="from">
            {source}{" "}
            {moment(moment.unix(platform_pub_time)).format("MM月DD日 HH:mm")}
          </p>
        </div>
      </div>
    </div>
  );
};

const PredictionItem = (props) => {
  const {
    recent_result = "",
    category = "",
    icon = "",
    master_name = "",
    recent_hit = "",
  } = props;
  return (
    <div className="prediction-item" onClick={props.onClick}>
      <p className="title">{category}</p>
      <img alt="图片地址错误" src={`${icon}!avatar`} />
      <p className="name">{master_name}</p>
      <p className="grade">
        近{recent_result} 最近连中{recent_hit}期
      </p>
    </div>
  );
};

function Detail(props) {
  const { lotteries = [], tagList = [], typeId, rankList = [] } = props;

  let rankFirstList = []; //预测的第一名
  rankList.map((v) => {
    const { data = [], category = "" } = v;
    const first = data.find((item) => item.rank === 1);
    if (first && rankFirstList.length < 5) {
      rankFirstList.push({ category, ...first });
    }
  });

  let lotteryList = [];
  lotteries.map((v) => {
    const { name = "" } = v;
    const data = baseList.find((item) => item.name === name);
    if (data) {
      lotteryList.push({ ...data, ...v });
    }
  });
  const lottery = lotteryList.find((item) => item.key === typeId);

  const onSelectTab = (v) => {
    const { key, name } = v;
    props.dispatch({ type: "detail/setTypeId", payload: key });
    props.dispatch({ type: "forecast/getData", payload: { id: key } });
  };

  let history = useHistory();
  return (
    <div className="detail">
      <div className="breadcrumb">
        <Link to="/" style={{ color: "#999999", fontSize: "12px" }}>
          <p>首页</p>
        </Link>
        <p>{">"}</p>
        <p>开奖详情</p>
      </div>
      <div className="lottery">
        <div className="lottery-tab">
          <div className="lottery-tab-title">全部彩种</div>
          <div className="lottery-tab-items">
            {lotteryList.map((v, i) => {
              const { name, key } = v;
              const selectedTitle = typeId === key;
              return (
                <div
                  key={i}
                  className={selectedTitle ? "selectedTitle" : "normalTitle"}
                  onClick={() => onSelectTab(v)}
                >
                  <Link to={`/detail/${key}`}>{name}</Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className="lottery-detail">
          <div className="lottery-detail-title">
            <div>{valueName[typeId]}开奖详情</div>
          </div>
          <LotteryDetail {...lottery} />
        </div>
      </div>

      <div className="info">
        <div className="info-title">最新资讯</div>
        <div className="info-box">
          {tagList.map((v, i) => {
            return (
              <InfoItem
                setMask={() => {
                  props.dispatch({ type: "global/setModal", payload: true });
                }}
                {...v}
                key={i}
              />
            );
          })}
        </div>
      </div>
      {typeId != "n7xingcai" && (
        <div className="expert-prediction">
          <div className="info-title">
            <div className="selectedInfo">
              <p>专家预测</p>
              <p className="more">
                <Link to={`/forecast/${typeId}`}>{"查看更多 >"}</Link>
              </p>
            </div>
          </div>
          <div className="prediction-list">
            {rankFirstList.map((v, i) => {
              return (
                <PredictionItem
                  onClick={() => {
                    history.push(`/forecast/${typeId}`);
                  }}
                  key={i}
                  {...v}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

const getSearchParams = (search) => {
  var pairs = search.slice(1).split("&");
  var result = {};
  pairs.forEach(function (pair) {
    if (pair && pair.indexOf("=") !== -1) {
      pair = pair.split("=");
      //兼容写法
      result[pair[0]] = result[
        pair[0].toLocaleLowerCase()
      ] = decodeURIComponent(pair[1] || "");
    }
  });

  return JSON.parse(JSON.stringify(result));
};

Detail.getInitialProps = async (ctx) => {
  const typeId = __isBrowser__ ? ctx.match.params.typeId : ctx.params.typeId;
  await ctx.store.dispatch({ type: "detail/setTypeId", payload: typeId });
  await ctx.store.dispatch({ type: "detail/getData", payload: {} });
  await ctx.store.dispatch({
    type: "detail/getTags",
    payload: { tags: newInfo, pagelen: 4, page: 1, mode: "OR" },
  });
  await ctx.store.dispatch({
    type: "forecast/getData",
    payload: { id: typeId },
  });
};

export default connect(({ detail, forecast }) => ({
  lotteries: detail.lotteries,
  tagList: detail.tagList,
  rankList: forecast.itemList,
  typeId: detail.typeId,
}))(Detail);
