import React from 'react'
import './style.less'

function Owner(props) {
  return (
    <div>
      <div></div>
      <div className="owner-banner">
        <div className="owner-img-banner" >
          <img src={require("../../assets/images/banner02.png")} />
        </div>
      </div>
      <div className="mainGrey">
        <div className="mainWidth mainFlex">
          <img src={require("../../assets/images/n1.png")} />
        </div>
      </div>
      <div className="mainWhite">
        <div className="mainWidth mainFlex">
          <img src={require("../../assets/images/n2.png")} />
        </div>
      </div>
      <div className="mainGrey">
        <div className="mainWidth mainFlex">
          <img src={require("../../assets/images/n3.png")} />
        </div>
      </div>
      <div className="mainWhite">
        <div className="mainWidth mainFlex">
          <img src={require("../../assets/images/n4.png")} />
        </div>
      </div>
      <div className="owner-foot-banner">
        <div className="owner-foot-banner-img" >
          <img src={require("../../assets/images/sfootbanner2.png")} />
        </div>
      </div>
    </div>
  );
}

export default Owner;