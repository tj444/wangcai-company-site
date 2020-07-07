import React from 'react'
import './style.less'

function Customer(props) {
  return (
    <div>
      <div></div>
      <div className="customer-banner">
        <div className="customer-img-banner">
          <a href="https://apk.cdn.wcssq.cn/ssq/release/latest/ssq-p005.apk">
            <img src={require("../../assets/images/sbanner1.png")} />
          </a>
        </div>
      </div>
      <div className="mainGrey">
        <div className="mainWidth custom-main-flex">
          <img src={require("../../assets/images/m1.png")} />
        </div>
      </div>
      <div className="mainWhite">
        <div className="mainWidth custom-main-flex">
          <img src={require("../../assets/images/m2.png")} />
        </div>
      </div>
      <div className="mainGrey">
        <div className="mainWidth custom-main-flex">
          <img src={require("../../assets/images/m3.png")} />
        </div>
      </div>
      <div className="mainWhite">
        <div className="mainWidth custom-main-flex">
          <img src={require("../../assets/images/m4.png")} />
        </div>
      </div>
      <div className="customer-foot-banner">
        <div className="customer-foot-banner-img" >
          <img src={require("../../assets/images/sfootbanner1.png")} />
        </div>
      </div>
    </div>
  );
}

export default Customer;