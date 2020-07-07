import React from 'react'
import ImgBadge from './badge.png'
import ImgOrder1 from './order-1.png'
import ImgOrder2 from './order-2.png'
import ImgOrder3 from './order-3.png'

function DetailsList(props) {
  return (
    <div className="card-expert-details">
      <div className="card-title-p10">
        <img className="card-title-img" src={ImgBadge}></img>
        <span className="card-title-text">蓝球定五</span>
      </div>
      <ul className="card-body-listitem">
        <li>
          <img className="img-order" src={ImgOrder1}></img>
          <img className="img-icon" src={ImgBadge}></img>
          <div className="content">
            <div className="title">我是昵称</div>
            <div className="subTitle">最近连中3期</div>
          </div>
          <div className="score">七中七</div>
        </li>
        <li>fdjslfj</li>
        <li>sdlfsdfjlk</li>
        <li>fdslfsdfj</li>
        <li>fdslfj</li>
      </ul>
    </div>
  );
}

const mapStateToProps = state => ({
});

export default DetailsList
