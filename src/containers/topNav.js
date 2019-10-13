import React from 'react';
import { connect } from 'react-redux';
import TopNav from '../components/topNav';
import queryString from 'query-string';

const mapStateToProps = (state, ownProps) => {
  const displayingResults = ownProps.location.pathname.match(/\/(search|playlist|related)/);  
  console.log(state);

  return {
    displayingResults,
    heading: state.ui.pageHeading,
    img: state.ui.pageHeadingImg
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopNav);
