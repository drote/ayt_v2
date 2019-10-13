import React from 'react';
import { connect } from 'react-redux';
import TopNav from '../components/topNav';
import { getPageHeading, getHeadingImage, getMainWidth, getMainPos } from '../lib/selectors';

const mapStateToProps = (state, ownProps) => {
  const displayingResults = ownProps.location.pathname.match(/\/(search|playlist|related)/);  

  return {
    displayingResults,
    heading: getPageHeading(state),
    img: getHeadingImage(state),
    width: getMainWidth(state),
    side: getMainPos(state)
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
