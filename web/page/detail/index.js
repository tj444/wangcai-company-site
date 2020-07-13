import React,{useState} from 'react';
import { connect } from 'dva';
import { Link } from 'react-router-dom';
import QRCode from 'qrcode.react';
import moment from 'moment';
import './index.less';

const qrcode='https://apk.cdn.wcssq.cn/ssq/release/latest/ssq-p034.apk';
const newInfo = '新闻资讯,中奖故事,自编新闻';

const baseList = [
  {name:'双色球',img:require('../../assets/images/双色球.png')},
  {name:'福彩3D',img:require('../../assets/images/3D.png')},
  {name:'七乐彩',img:require('../../assets/images/7乐彩.png')},
  {name:'大乐透',img:require('../../assets/images/大乐透.png')},
  {name:'排序3',img:require('../../assets/images/排列3.png')},
  {name:'排序5',img:require('../../assets/images/排列5.png')},
  {name:'七星彩',img:require('../../assets/images/七星彩.png')},
];

const LotteryDetail = (props) =>{
  const {name='',img='' ,result='08,17,24,26,27,31,04',open_time=1594300500, balance='', issue='',sales='' ,detail=[]} = props;
  const resultList = result.split(',');
  const totalPrice = Number((balance/100000000).toFixed(2));
  return (
    <div className="lottery_detail">
      <div className="lottery_issue">
        <img alt='' src={img} />
        <p style={{fontSize:'18px'}}>第{issue}期</p>
        <div style={{flex:1}}></div>
        <p>开奖日期：{moment(moment.unix(open_time)).format('YYYY年MM月DD日')}</p>
      </div>
      <div className="lottery_detail_info">
        <p className="name">{name}第{issue}期 开奖详情</p>
        <p className="time">开奖时间：{moment(moment.unix(open_time)).format('YYYY-MM-DD HH:mm')}</p>
        <div className="resultList">
          {resultList.map((v,i) =>{
            return(
              <div className={'redBall'} key={i}>{v}</div>
            )
          })}
        </div>
        <div className='lottery_sales'>
          <div className="point"></div>
          <p>奖池：{totalPrice}亿元</p>
          <div style={{width:'60px'}}></div>
          <div className="point"></div>
          <p>销售额：{sales}元</p>
        </div>

        <p className="detailTitle">中奖详情</p>

        <table className="Modbus">
          <thead>
            <tr>
              <th>奖项</th>
              <th>中奖注数（注）</th>
            </tr>
          </thead>
          {
            detail.length>0 && detail.map((v,i) =>{
              const {count='',name=''} = v;
              return(
                <tr key={i}>
                  <th>{name}</th>
                  <th>{count}</th>
                </tr>
              )
            })
          }
        </table>
      </div>
    </div>
  )
}

const InfoItem = (props) =>{
  const { images = [], title = '',source='',platform_pub_time=0,description='', setMask } = props;
  return (
    <div className="infoItem" onClick={() => setMask(true)}>
      <img alt="图片地址错误" src={images[0] || ''} />
      <div>
        <p className="title">{title}</p>
        <div className="descript">{description}</div>
        <p className="readMore">{'阅读详情 >'}</p>
        <p className="from">{source} {moment(moment.unix(platform_pub_time)).format('MM月DD日 HH:mm')}</p>
      </div>
    </div>
  )
}

const PredictionItem = (props) =>{
  const {recent_result='',category='',icon='',master_name='',recent_hit=''} = props;
  return(
    <div className="prediction_item">
      <p className='title'>{category}</p>
      <img alt='图片地址错误' src={icon} />
      <p className='name'>{master_name}</p>
      <p className='grade'>近{recent_result}  最近连中{recent_hit}期</p>
    </div>
  )
}

function Detail(props) {
  const { lotteries = [], tagList = [],typeId, rankList = [] } = props;
  
  let rankFirstList = []; //预测的第一名
  rankList.map((v) =>{
    const {data=[],category=''} = v;
    const first = data.find(item =>item.rank===1);
    if(first && rankFirstList.length<5){
      rankFirstList.push({category,...first});
    }
  });

  let lotteryList = [];
  lotteries.map((v) =>{
    const {name=''} = v;
    const data = baseList.find(item =>item.name===name);
    if(data){
      lotteryList.push({...data,...v});
    }
  })
  const [lotteryInfo,setLotteryInfo]  = useState(lotteryList[0]);

  const [mask,setMask]  = useState(false);
  const [totteryId,setTotteryId] = useState(typeId);
  const [tottery,setLottery] = useState('双色球');

  const onSelectTab = (props) =>{
    const {key,name} =props;
    setTotteryId(key);
    setLottery(name);
    setLotteryInfo(props);
  }
  return (
    <div className="page_body">
      <div className="mainBody">
          <div className="breadCrumb">
            <Link to="/" style={{color:'#999999',fontSize:'12px'}}>
              <p>首页</p>
            </Link>
            <p>{'>'}</p>
            <p>开奖详情</p>
          </div>
          <div className="lotteryDetailContainer">
            <div className="lotteryTitle">
              <div className="lotteryTabTitle">全部彩种</div>
              <div style={{padding:'10px 0'}}>
                {
                  lotteryList.map((v,i) =>{
                    const { name, key } = v;
                    const selectedTitle = totteryId === key;
                    return(
                      <div key={i} className={selectedTitle?"selectedTitle":"normalTitle"}  onClick={() =>onSelectTab(v)}>
                        <a href={`/detail/${key}`}>{name}</a>
                      </div>
                    )
                  })
                }
              </div>
            </div>
            <div style={{flex:1}}>
              <div className="box_title">
                <div>{tottery}开奖详情</div>
              </div>
              <LotteryDetail {...lotteryInfo} />
            </div>
          </div>

          <div className="info_title">
            <p className='selectedInfo'>最新咨询</p>
          </div>
          <div className="all_lottery">
            {
              tagList.map((v,i) =>{
                return (
                  <InfoItem setMask={setMask} {...v} key={i} />
                )
              })
            }
          </div>
      </div>
      <div className="expert_prediction">
        <div className="info_title">
          <div className='selectedInfo'>
            <p>专家预测</p>
            <p className='more'>{'查看更多 >'}</p>
          </div>
        </div>
        <div className="prediction_list">
          {
            rankFirstList.map((v,i) =>{
              return(
                <PredictionItem key={i} {...v} />
              )
            })
          }
        </div>
      </div>
      { mask && 
        <div style={{width:'100%',height:'100%'}}>
          <div className="mask"></div>
          <div className="downloadContainer">
            <div className="downloadBg">
              <div className="downloadDiv">
                <QRCode
                  value={qrcode}// 生成二维码的内容
                  size={100} // 二维码的大小
                  fgColor="#000000" // 二维码的颜色
                />
              </div>
            </div>
            <img onClick={() =>setMask(false)} alt='' src={require('../../assets/images/closeBtn.png')} />
          </div> 
        </div>
      }
    </div>
  );
}

Detail.getInitialProps = async (ctx) => {
  const typeId = __isBrowser__ ? ctx.match.params.typeId : ctx.params.typeId;
  await ctx.store.dispatch({ type: 'page/getData', payload: {} });
  await ctx.store.dispatch({ type: 'page/getTags' ,payload:{ tags: newInfo, pagelen: 4, page: 1, mode: 'OR' }});
  await ctx.store.dispatch({ type: 'forecast/getData', payload: { id: typeId || 'shuangseqiu' } });
};

const mapStateToProps = state => (() =>{
  return{
    lotteries: state.page.lotteries,
    tagList: state.page.tagList,
    rankList: state.forecast.itemList,
    typeId: state.forecast.typeId,
  }
});

export default connect(mapStateToProps)(Detail);