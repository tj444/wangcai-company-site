import React, { useState, useEffect } from "react";
import { connect } from "dva";
import { Link } from "react-router-dom";
import moment from "moment";
import { useHistory } from "react-router-dom";
import "./index.less";


const baseList = [
  { name: "双色球", img: require("../../assets/images/shuangseqiu.png") },
  { name: "福彩3D", img: require("../../assets/images/3D.png") },
  { name: "七乐彩", img: require("../../assets/images/7lecai.png") },
  { name: "大乐透", img: require("../../assets/images/daletou.png") },
  { name: "排列3", img: require("../../assets/images/pailie3.png") },
  { name: "排列5", img: require("../../assets/images/pailie5.png") },
  { name: "七星彩", img: require("../../assets/images/qixingcai.png") },
];

const nameValue = {
  双色球: "shuangseqiu",
  大乐透: "daletou",
  福彩3D: "fucai3d",
  七乐彩: "qilecai",
  七星彩: "n7xingcai",
  排列3: "pailie3",
  排列5: "pailie5",
};

const defaultTag = "新闻资讯,中奖故事,自编新闻";

const LotteryItem = (props) => {
  const {
    name = "",
    img = "",
    result = "",
    open_time = 1594300500,
    balance = "",
    issue = "",
    detail = [],
  } = props;
  const resultList = result.split(",");
  const totalPrice = Number((balance / 100000000).toFixed(2));
  const firstPrice = detail[0] && detail[0].count;
  const secondPrice = detail[1] && detail[1].count;
  const thirdPrice = detail[2] && detail[2].count;
  const oneBlue = name === "双色球" || name === "七乐彩";
  const twoBlue = name === "大乐透";
  return (
    <div className="lottery-item" onClick={()=>props.history.push(`/detail/${nameValue[props.name]}`)}>
      <div className="lottery-base">
        <img className="lottery-icon" alt="" src={img} />
        <div className="lottery-info">
          <div className="desc">
            <p>{name}开奖结果</p>
            <p>
              <Link to={`/detail/${nameValue[props.name]}`}>详情</Link>
            </p>
          </div>
          <div className="date">
            <p>第{issue}期</p>
            <p>{moment(moment.unix(open_time)).format("YYYY/MM/DD HH:mm")}</p>
          </div>
        </div>
      </div>
      <div className="lottery-result">
        <div className="lottery-result-box">
          {resultList.map((v, i) => {
            const last = i === resultList.length - 1;
            const sLast = i === resultList.length - 2;
            let className = "redBall";
            if (oneBlue && last) className = "blueBall";
            if (twoBlue && (last || sLast)) className = "blueBall";
            return (
              <div className={className} key={i}>
                {v}
              </div>
            );
          })}
        </div>
      </div>
      <div className="lottery-result-info-detail">
        <div className="title">中奖详情：</div>
        <div className="detail">
          <p>
            一等奖：<span style={{ color: "#ED0004" }}>{firstPrice}</span>
          </p>
          <p>
            二等奖：<span style={{ color: "#ED0004" }}>{secondPrice}</span>
          </p>
          <p>
            三等奖：<span style={{ color: "#ED0004" }}>{thirdPrice}</span>
          </p>
        </div>
      </div>
      <div className="lottery-result-info-pool">
        <div className="title">
          奖&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;池：
        </div>
        <div className="detail">
          <span style={{ color: "#ED0004" }}>{totalPrice}亿</span>
        </div>
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

function Home(props) {
  const {
    lotteries = [],
    infoTabs = [],
    tagList = [],
    tags = defaultTag,
  } = props;
  const [selectTag, setSelectTag] = useState(tags);

  let history = useHistory();


  useEffect(() => {}, []);

  const onChooseTags = (tags) => {
    // if (tags === selectTag) return;
    props.dispatch({
      type: "page/getTags",
      payload: { tags, pagelen: 4, page: 1 },
    });
    setSelectTag(tags);
  };

  let lotteryList = [];
  lotteries.map((v) => {
    const { name = "" } = v;
    const data = baseList.find((item) => item.name === name);
    if (data) {
      lotteryList.push({ ...data, ...v });
    }
  });
  return (
    <div className="home">
      <div className="home-wrap">
      <div className="banner">
        <div className="banner1">
          <img alt="" src={require("../../assets/images/banner02.png")} />
        </div>
        <div className="banner2">
          <img alt="" src={require("../../assets/images/sbanner1.png")} />
        </div>
      </div>

      <div className="lottery">
        <div className="lottery-title">
          <div>全国彩种开奖</div>
        </div>
        <div className="lottery-box">
          {lotteryList.map((v, i) => {
            return <LotteryItem {...v} history={history} key={i} />;
          })}
        </div>
      </div>
      <div className="info">
        <div className="info-title">
          {infoTabs.map((v, i) => {
            const { value, title } = v;
            const selected = selectTag === value;
            return (
              <a
                href="javascript:void(0)"
                onClick={() => onChooseTags(value)}
                key={i}
                className={selected ? "selected" : ""}
              >
                {title}
              </a>
            );
          })}
        </div>
        <div className="info-box">
          {tagList.map((v, i) => {
            return <InfoItem setMask={()=>{
              props.dispatch({ type: "global/setModal", payload: true });
            }} {...v} key={i} />;
          })}
        </div>
      </div>
    </div>
    </div>
  );
}

Home.getInitialProps = async (ctx) => {
  await ctx.store.dispatch({ type: "page/getData", payload: {} });
  await ctx.store.dispatch({
    type: "page/getTags",
    payload: { tags: defaultTag, pagelen: 4, page: 1, mode: "OR" },
  });
};

export default connect(({ page, loading }) => ({
  lotteries: page.lotteries,
  tagList: page.tagList,
  tags: page.tags,
  infoTabs: page.infoTabs,
  loading: loading,
}))(Home);
