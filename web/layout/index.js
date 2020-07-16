import React from "react";
import serialize from "serialize-javascript";
import { Link } from "react-router-dom";
import { connect } from 'dva';
import QRCode from "qrcode.react";

import cmb from "@/assets/images/ssq.png";
import dzb from "@/assets/images/dzb.png";
import { ReactComponent as Logo } from "@/assets/images/logo.svg";
import Loading from '@/components/Loading'

import "normalize.css";
import "@/assets/common.less";
import "./index.less";

const qrcode = "https://apk.cdn.wcssq.cn/ssq/release/latest/ssq-p034.apk";

const commonNode = (props) =>
  // 为了同时兼容ssr/csr请保留此判断，如果你的layout没有内容请使用 props.children ?  props.children  : ''
  props.children ? (
    <div className="wrapper">
    {props.loading && <Loading loading={props.loading} />}
      <div className="header">
        <div className="header-content">
          <div className="title-content">
            <Link to="/">
              <Logo className="logo" />
              <span className="title">提供专业彩票服务</span>
            </Link>
          </div>
          <div className="right-content">
            <ul className="navbar">
              <li>
                <Link to="/">
                  <span>首页</span>
                </Link>
              </li>
              <li>
                <Link to="/trend">
                  <span>图表走势</span>
                </Link>
              </li>
              <li>
                <Link to="/forecast/shuangseqiu">
                  <span>专家预测</span>
                </Link>
              </li>
              <li className="select">
                <Link to="#">
                  <span>产品介绍</span>
                </Link>
                <div className="selectOptions">
                  <Link to="/LotteryEdition">
                    <span>旺彩彩民版</span>
                  </Link>
                  <Link to="/shopkeeperVersion">
                    <span>旺彩店主版</span>
                  </Link>
                </div>
              </li>
              <li>
                <Link to="/about">
                  <span>关于</span>
                </Link>
              </li>
              <li>
                <a href="javascript:void(0)" onClick={()=>{
                  props.dispatch({ type: "global/setModal", payload: true });
                }}>
                  <span>下载</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="content-inner">{props.children}</div>
      </div>
      <div className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <ul className="nav">
              <li>
                <Link to="/LotteryEdition">
                  <span>旺彩彩民版</span>
                </Link>
              </li>
              <li>
                <Link to="/shopkeeperVersion">
                  <span>旺彩店主版</span>
                </Link>
              </li>
              <li>
                <a href="javascript:void(0)" onClick={()=>{
                  props.dispatch({ type: "global/setModal", payload: true });
                }}>
                  <span>下载</span>
                </a>
              </li>
              <li>
                <Link to="/about">
                  <span>关于我们</span>
                </Link>
              </li>
            </ul>
            <div className="copyright">
              Copyright ©2016 北京掌控世代科技有限公司
            </div>
            <div className="registered">备案号:京ICP备14035183号-1</div>
          </div>
          <div className="footer-right">
            <div className="down-caimin">
              <div className="imgBox">
                <img src={cmb} />
              </div>
              <h4>彩民版下载</h4>
            </div>
            <div className="down-caimin">
              <div className="imgBox">
                <img src={dzb} />
              </div>
              <h4>店主版下载</h4>
            </div>
          </div>
        </div>
      </div>
      {props.modal && (
        <div style={{ width: "100%", height: "100%" }}>
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
            <img
              onClick={() => {
              props.dispatch({ type: "global/setModal", payload: false });
              }}
              alt=""
              src={require("../assets/images/closeBtn.png")}
            />
          </div>
        </div>
      )}
    </div>
  ) : (
    ""
  );

const Layout = (props) => {
  if (__isBrowser__) {
    return commonNode(props);
  } else {
    const { serverData } = props.layoutData;
    const { injectCss, injectScript } = props.layoutData.app.config;
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta name="theme-color" content="#000000" />
          <title>旺彩--提供专业彩票服务</title>
          {injectCss &&
            injectCss.map((item) => (
              <link rel="stylesheet" href={item} key={item} />
            ))}
        </head>
        <body>
          <div id="app">{commonNode(props)}</div>
          {serverData && (
            <script
              dangerouslySetInnerHTML={{
                __html: `window.__USE_SSR__=true; window.__INITIAL_DATA__ =${serialize(
                  serverData
                )}`, // 使用pathname作为组件初始化数据的隔离，防止props污染
              }}
            />
          )}
          <div
            dangerouslySetInnerHTML={{
              __html: injectScript && injectScript.join(""),
            }}
          />
        </body>
      </html>
    );
  }
};

export default connect(({loading, global})=>({
  loading: loading.global,
  modal: global.modal,
}))(Layout);
