import React from 'react';
import { connect } from 'react-redux';
import TopNav from '../components/topNav';
 
const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  const displayingResults = ownProps.location.pathname.match(/\/(search|playlist|related)/);

  return {
    displayingResults
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
