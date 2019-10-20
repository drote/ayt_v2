import React from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import Content from '../components/content';

import {
    getContent,
    getSelectedThumb,
    getPageN,
    getResultsPerPage,
    getSearchStatus,
    getGridClass,
    getEditedThumbIdx
} from '../lib/selectors';

const editingEnabled = (location) => {
  return !!(queryString.parse(location.search).editing === 'true'
       && location.pathname.match('/home'));
}

const mapStateToProps = (state, ownProps) => {  
  return {
    content: getContent(state),
    gridClass: getGridClass(state),
    selectedThumb: getSelectedThumb(state),
    editedThumbIdx: getEditedThumbIdx(state),
    pageN: getPageN(state),
    resultsPerPage: getResultsPerPage(state),
    status: getSearchStatus(state),
    editingEnabled: editingEnabled(ownProps.location)
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
