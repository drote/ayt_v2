import { connect } from 'react-redux';
import queryString from 'query-string';
import Thumb from '../components/thumb';
import {
  getThumbHeight,
  getSelectedBorderStyle,
  getNumberOfTextRows,
  getImageClass,
  getTitleSize,
  getSearchErrorStatus,
} from '../lib/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    editMode: ownProps.editingEnabled, // TODOD take from selector / helper
    selected: ownProps.selected,
    height: getThumbHeight(state),
    selectedBorderStyle: getSelectedBorderStyle(state),
    numberOfTextRows: getNumberOfTextRows(state),
    imageClass: getImageClass(state),
    titleSize: getTitleSize(state),
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
)(Thumb);
