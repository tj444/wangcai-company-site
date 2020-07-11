import React,{useState} from 'react';
import { connect } from 'dva';
import moment from 'moment';
import './index.less';

const baseList = [
  {name:'双色球',img:require('../../assets/images/双色球.png')},
  {name:'福彩3D',img:require('../../assets/images/3D.png')},
  {name:'七乐彩',img:require('../../assets/images/7乐彩.png')},
  {name:'大乐透',img:require('../../assets/images/大乐透.png')},
  {name:'排序3',img:require('../../assets/images/排列3.png')},
  {name:'排序5',img:require('../../assets/images/排列5.png')},
  {name:'七星彩',img:require('../../assets/images/七星彩.png')},
];

const newInfo = '新闻资讯,中奖故事,自编新闻';

const infoTabs =[
  {title:'最新咨询',value:newInfo},
  {title:'双色球',value:'双色球'},
  {title:'大乐透',value:'大乐透'},
  {title:'3D',value:'福彩3D'},
  {title:'排列3/5',value:'排列3,排列5'},
  // {title:'七乐彩',value:'七乐彩'},
];

const LotteryItem = (props) =>{
  const {name='',img='' ,result='08,17,24,26,27,31,04',open_time=1594300500, balance='', issue='' ,detail=[]} = props;
  const resultList = result.split(',');
  const totalPrice = Number((balance/100000000).toFixed(2));
  const firstPrice = detail[0] && detail[0].count;
  const secondPrice = detail[1] && detail[1].count;
  const thirdPrice = detail[2] && detail[2].count;
  return(
    <div className="lotteryItem">
      <div className="lotteryBaseInfo">
        <img alt='' src={img} />
        <div style={{flex:1}}>
          <div className="flexBetween1" style={{marginBottom:'5px'}}>
            <p style={{fontSize:'18px',color:'#333333',fontWeight:500}}>{name}开奖结果</p>
            <p className="detail">详情</p>
          </div>
          <div className="flexBetween1">
            <p style={{fontSize:'14px',color:'#999999'}}>第{issue}期</p>
            <p style={{fontSize:"14px",color:'#333333'}}>{moment(moment.unix(open_time)).format('YYYY/MM/DD HH:mm')}</p>
          </div>
        </div>
      </div>
      <div className="resultList">
        {resultList.map((v,i) =>{
          return(
            <div className={'redBall'} key={i}>{v}</div>
          )
        })}
      </div>
      <div className='priceInfo' style={{padding:'10px 0 0',color:'#585858'}}>
        <p style={{color:'#333333',fontWeight:500}}>中奖详情：</p>
        <p>一等奖：<span style={{color:'#ED0004'}}>{firstPrice}</span></p>
        <p style={{margin:'0 30px'}}>二等奖：<span style={{color:'#ED0004'}}>{secondPrice}</span></p>
        <p>三等奖：<span style={{color:'#ED0004'}}>{thirdPrice}</span></p>
      </div>
      <div className='priceInfo' style={{padding:'10px 0'}}>
        <p style={{color:'#333333',fontWeight:500}}>奖<span style={{width:'33px',display:'inline-block'}}></span>池：
          <span style={{color:'#ED0004'}}>{totalPrice}亿</span>
        </p>
        <p>{balance}</p>
      </div>
    </div>
  )
}

const InfoItem = (props) =>{
  const {images=[],title=''} = props;
  return(
    <div className="infoItem">
      <img alt='' src={images[0] ? images[0]:'http://p.wangcaissq.com/avatar/200710/2468774b04a1961190276117b1bc5d5edafa48ba.jpg'} />
      <div>
        <p className='title'>{title}</p>
        <p className='descript'>来自浙江杭州的彩民王先生凭借一张“5+7”复式追 票，收获大乐透1925万大奖...</p>
        <p className='readMore'>{'阅读详情 >'}</p>
        <p className='from'>新彩网  06月30日  07:02</p>
      </div>
    </div>
  )
}

function Page(props) {
  const {allLottery={}} = props;
  const {quanguo=[]} = allLottery;

  const [selectTag,setSelectTag]  = useState(newInfo);
  
  const onChooseTags = (tags) =>{
    setSelectTag(tags);
    props.dispatch({type:'page/getTags',payload:{tags,pagelen:10,page:1}});
  }

  let lotteryList = [];
  quanguo.map((v) =>{
    const {name=''} = v;
    const data = baseList.find(item =>item.name===name);
    if(data){
      lotteryList.push({...data,...v});
    }
  })
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
            {
              infoTabs.map((v,i) =>{
                const {value,title} = v;
                const selected = selectTag===value;
                return (<p onClick={() =>onChooseTags(value)} key={i} className={selected?'selectedInfo':''}>{title}</p>)
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

Page.getInitialProps = async (ctx) => {
  await ctx.store.dispatch({ type: 'page/getData' ,payload:{ctx,isBrowser:__isBrowser__}});
  await ctx.store.dispatch({ type: 'page/getTags' ,payload:{ctx,isBrowser:__isBrowser__,tags:newInfo,pagelen:20,page:1,mode:'OR'}});
};

const mapStateToProps = state => (() =>{
  return{
    allLottery: state.page.allLottery,
    tagList:state.page.tagList,
  }
});

export default connect(mapStateToProps)(Page);
