import React from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import EditableThumb from '../components/editableThumb';
import {
  getThumbHeight,
  getSelectedBorderStyle,
  getNumberOfTextRows,
  getImageClass,
  getTitleSize,
  getSearchStatus,
  getEditingStatus,
  getSearchErrorStatus,
} from '../lib/selectors';

const editingEnabled = (location) => {
  return queryString.parse(location.search).editing === 'true'
       && location.pathname.match('/home');
}

const mapStateToProps = (state, ownProps) => {
  return {
    editing: getEditingStatus(state),
    showEditButtons: editingEnabled(ownProps.location),
    selected: ownProps.selected,
    height: getThumbHeight(state),
    selectedBorderStyle: getSelectedBorderStyle(state),
    numberOfTextRows: getNumberOfTextRows(state),
    imageClass: getImageClass(state),
    titleSize: getTitleSize(state),
    status: getSearchStatus(state),
    ...ownProps
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditableThumb);
