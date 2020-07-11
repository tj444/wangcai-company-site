import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'dva';
import axios from 'axios';
import './index.less';
import { getDate } from 'date-fns';
import ForecastItem from './component/ForecastItem';

function Forecast(props, props2) {
  // 列表值
  const { itemList, typeList, typeId } = props;
  useEffect(() => {}, []);

  return (
    <div className="forecast-box">
      <div className="leftBox">
        <div className="left_box_title">全部彩种</div>
        <ul>
          {typeList.map((item, index) => (
            <li key={index} className={item.value == typeId ? 'active' : ''}>
              <a href={`/forecast/${item.value}`}>
                <span> {item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="right_box">
        {itemList && itemList.map((item, index) => <ForecastItem key={index} itemInfo={item}></ForecastItem>)}
      </div>
    </div>
  );
}

Forecast.getInitialProps = async ctx => {
  const typeId = __isBrowser__ ? ctx.match.params.typeId : ctx.params.typeId;
  await ctx.store.dispatch({ type: 'forecast/getData', payload: { id: typeId } });
};

const mapStateToProps = state => ({
  itemList: state.forecast.itemList,
  typeList: state.forecast.typeList,
  typeId: state.forecast.typeId,
});

export default connect(mapStateToProps)(Forecast);
