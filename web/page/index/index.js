import React from 'react';
import { connect } from 'dva';
import './index.less';
import { Link } from 'react-router-dom';



function Page(props) {
  return (
    <div className="page_body">
    </div>
  );
}

Page.getInitialProps = async ({ store }) => {
  await store.dispatch({ type: 'page/getData' });
};

const mapStateToProps = state => ({
  news: state.page.news,
});

export default connect(mapStateToProps)(Page);
