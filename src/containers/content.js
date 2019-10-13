import React from 'react';
import { connect } from 'react-redux';
import Content from '../components/content';
import { getContent, getColN, getSelectedThumb, getPageN, getThumbHeight } from '../lib/selectors';

const mapStateToProps = (state, ownProps) => {
  const displayingContent = ownProps.location.pathname.match(/\/(search|playlist|related|home)/);  

  return {
    displayingContent,
    content: getContent(state),
    colN: getColN(state),
    thumbHeight: getThumbHeight(state),
    selectedVid: getSelectedThumb(state),
    page: getPageN(state),
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
