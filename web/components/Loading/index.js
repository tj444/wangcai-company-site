import React, { useEffect, useState } from 'react';
import './index.less';

const Loading = props => {
  return (
    <div className="loading">
      <div className="loading-progress">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default Loading;
