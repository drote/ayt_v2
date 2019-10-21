import { connect } from 'react-redux';
import { editingEnabled, searchPage } from '../lib/helpers';
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

const mapStateToProps = (state, ownProps) => {  
  return {
    content: getContent(state),
    gridClass: getGridClass(state),
    selectedThumb: getSelectedThumb(state),
    editedThumbIdx: getEditedThumbIdx(state),
    pageN: getPageN(state),
    resultsPerPage: getResultsPerPage(state),
    status: getSearchStatus(state),
    editingEnabled: editingEnabled(ownProps.location),
    onSearchPage: searchPage(ownProps.location)
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
