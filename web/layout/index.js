import React from 'react';
import serialize from 'serialize-javascript';
import { Link } from 'react-router-dom';
import StickyFooter from 'react-sticky-footer';
import 'normalize.css';
import { ReactComponent as Logo } from '@/assets/images/logo.svg';
import cmb from '@/assets/images/ssq.png';
import dzb from '@/assets/images/dzb.png';

import '@/assets/common.less';
import './index.less';

const commonNode = props =>
  // 为了同时兼容ssr/csr请保留此判断，如果你的layout没有内容请使用 props.children ?  props.children  : ''
  props.children ? (
    <>
      <div className="wrapper">
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
                  <Link to="#">
                    <span>专家预测</span>
                  </Link>
                </li>
                <li className="select">
                  <Link to="/">
                    <span>产品介绍</span>
                  </Link>
                  {/* <div className="selectOptions">
                    <Link to="/LotteryEdition">
                      <span>彩民版</span>
                    </Link>
                    <Link to="/ShopkeeperVersion">
                     <span>店主版</span>
                    </Link>
                   
                    
                  </div> */}
                  
                </li>
                <li>
                  <Link to="/about">
                    <span>关于</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span>下载App</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="context-inner">{props.children}</div>
        </div>
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
                <Link to="/">
                  <span>下载</span>
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <span>关于我们</span>
                </Link>
              </li>
            </ul>
            <div className="copyright">Copyright ©2016 北京掌控世代科技有限公司</div>
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
    </>
  ) : (
    ''
  );

const Layout = props => {
  if (__isBrowser__) {
    return commonNode(props);
  } else {
    const { serverData } = props.layoutData;
    const { injectCss, injectScript } = props.layoutData.app.config;
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="theme-color" content="#000000" />
          <title>旺彩--提供专业彩票服务</title>
          {injectCss && injectCss.map(item => <link rel="stylesheet" href={item} key={item} />)}
        </head>
        <body>
          <div id="app">{commonNode(props)}</div>
          {serverData && (
            <script
              dangerouslySetInnerHTML={{
                __html: `window.__USE_SSR__=true; window.__INITIAL_DATA__ =${serialize(serverData)}`, // 使用pathname作为组件初始化数据的隔离，防止props污染
              }}
            />
          )}
          <div
            dangerouslySetInnerHTML={{
              __html: injectScript && injectScript.join(''),
            }}
          />
        </body>
      </html>
    );
  }
};

export default Layout;
