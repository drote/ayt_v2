import React from 'react';
import { connect } from 'react-redux';
import Content from '../components/content';

import {
    getContent,
    getSelectedThumb,
    getPageN,
    getResultsPerPage,
    getSearchStatus,
    getGridClass
} from '../lib/selectors';

const mapStateToProps = (state, ownProps) => {  
  return {
    content: getContent(state),
    gridClass: getGridClass(state),
    selectedThumb: getSelectedThumb(state),
    pageN: getPageN(state),
    resultsPerPage: getResultsPerPage(state),
    status: getSearchStatus(state)
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
