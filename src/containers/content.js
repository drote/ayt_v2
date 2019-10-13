import React from 'react';
import { connect } from 'react-redux';
import Content from '../components/content';
import {
    getContent,
    getColN,
    getSelectedThumb,
    getPageN,
    getThumbHeight,
    getSelectedBorderColor,
    getResultsPerPage
  } from '../lib/selectors';

const mapStateToProps = (state, ownProps) => {
  const displayingContent = ownProps.location.pathname.match(/\/(search|playlist|related|home)/);  

  return {
    displayingContent,
    content: getContent(state),
    colN: getColN(state),
    thumbHeight: getThumbHeight(state),
    selectedThumb: getSelectedThumb(state),
    selectedBorderColor: getSelectedBorderColor(state),
    pageN: getPageN(state),
    resultsPerPage: getResultsPerPage(state)
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);
