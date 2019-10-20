import React from 'react';
import { connect } from 'react-redux';
import ThumbModal from '../components/thumbModal';
import {
  getImagesForModalThumb,
  getSearchStatus,
  getTitleForModalThumb,
  getUrlForModalThumb
} from '../lib/selectors';

// const editingEnabled = (location) => {
//   return queryString.parse(location.search).editing === 'true'
//        && location.pathname.match('/home');
// }

const mapStateToProps = (state, ownProps) => {
  return {
    title: getTitleForModalThumb(state),
    url: getUrlForModalThumb(state),
    images: getImagesForModalThumb(state),
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
)(ThumbModal);
