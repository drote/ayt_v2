import React from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';

import Content from '../components/content';
import {
    getContent,
    getColN,
    getRowN,
    getSelectedThumb,
    getPageN,
    getThumbHeight,
    getSelectedBorderColor,
    getResultsPerPage,
    getContentStatus
  } from '../lib/selectors';

const editing = (location) => {
  return queryString.parse(location.search).editing === 'true'
         && location.pathname.match('/home');
}

const mapStateToProps = (state, ownProps) => {
  const editMode = editing(ownProps.location);
  
  return {
    content: getContent(state),
    colN: getColN(state),
    rowN: getRowN(state),
    thumbHeight: getThumbHeight(state),
    selectedThumb: getSelectedThumb(state),
    selectedBorderColor: getSelectedBorderColor(state),
    pageN: getPageN(state),
    resultsPerPage: getResultsPerPage(state),
    status: getContentStatus(state),
    editMode
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
