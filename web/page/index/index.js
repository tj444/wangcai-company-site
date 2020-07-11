import React from 'react';
import { connect } from 'dva';
import './index.less';

const lotteryList = [
  {title:'双色球开奖结果',img:require('../../assets/images/双色球.png')},
  {title:'福彩3D开奖结果',img:require('../../assets/images/3D.png')},
  {title:'七乐彩开奖结果',img:require('../../assets/images/7乐彩.png')},
  {title:'超级大乐透开奖结果',img:require('../../assets/images/大乐透.png')},
  {title:'排列三开奖结果',img:require('../../assets/images/排列3.png')},
  {title:'排列五开奖结果',img:require('../../assets/images/排列5.png')},
  {title:'七星彩开奖结果',img:require('../../assets/images/七星彩.png')},
];

const infoTabs =[
  {title:'最新咨询',value:0},
  {title:'双色球',value:1},
  {title:'大乐透',value:2},
  {title:'3D',value:3},
  {title:'排列3/5',value:4},
  {title:'七乐彩',value:5},
];

const LotteryItem = () =>{
  return(
    <div className="lotteryItem">
      <div></div>
    </div>
  )
}

const InfoItem = () =>{
  return(
    <div className="infoItem">
      <div></div>
    </div>
  )
}

function Page(props) {
  props.dispatch({ type: 'page/getData' }); //本地直接调用
  console.log(props)

  return (
    <div className="page_body">
      <div className="bannerContent">
        <div className='banner1'>
          <img alt='' src={require('../../assets/images/banner02.png')} />
        </div>
        <div className='banner2'>
          <img alt='' src={require('../../assets/images/sbanner1.png')} />
        </div>
      </div>

      <div className="mainBody">
          <div className="right_box_title">
            <div>全国彩种开奖</div>
          </div>
          <div className="all_lottery">
            {
              lotteryList.map((v,i) =>{
                return(
                  <LotteryItem {...v} key={i} />
                )
              })
            }
          </div>

          <div className="info_title">
            <p className="selectedInfo">最新咨询</p>
            {
              infoTabs.map((v,i) =>{
                return (<p key={i}>{v.title}</p>)
              })
            }
          </div>
          <div className="all_lottery">
            {
              infoTabs.map((v,i) =>{
                return (
                  <InfoItem {...v} key={i} />
                )
              })
            }
          </div>
      </div>
    </div>
  );
}

Page.getInitialProps = async ({ store }) => {
  await store.dispatch({ type: 'page/getData' });
};

const mapStateToProps = state => (() =>{
  console.log(state);
  return{
    page: state.page,
  }
});

export default connect(mapStateToProps)(Page);
