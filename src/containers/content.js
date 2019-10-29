import { connect } from 'react-redux';
import { editingEnabled, searchPage } from '../lib/helpers';
import Content from '../components/content';
import * as Actions from '../actions/ContentActions';
import { moves } from '../lib/navigator';

import {
    getContent,
    getPageN,
    getResultsPerPage,
    getSearchStatus,
    getGridClass,
    getEditedThumbIdx,
    getSelectedThumbIdx,
    getRowLength
} from '../lib/selectors';

const mapStateToProps = (state, ownProps) => {  
  return {
    content: getContent(state),
    gridClass: getGridClass(state),
    selectedThumbIdx: getSelectedThumbIdx(state),
    editedThumbIdx: getEditedThumbIdx(state),
    pageN: getPageN(state),
    resultsPerPage: getResultsPerPage(state),
    status: getSearchStatus(state),
    editingEnabled: editingEnabled(ownProps.location),
    onSearchPage: searchPage(ownProps.location),
    rowLength: getRowLength(state)
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleArrowPress: (arrow, selectedIdx, rowLength) => {
      dispatch(Actions.move(moves(arrow, selectedIdx, rowLength)));
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);
