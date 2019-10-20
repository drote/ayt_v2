import React from 'react';
import { connect } from 'react-redux';
import TopNav from '../components/topNav';
import { getPageHeading, getSearchStatus, getHeadingImage, getMainWidth, getMainPos } from '../lib/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    status: getSearchStatus(state),
    heading: getPageHeading(state),
    img: getHeadingImage(state),
    width: getMainWidth(state),
    side: getMainPos(state),
    homePage: ownProps.location.pathname.match('/home')
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
