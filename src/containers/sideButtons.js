import { connect } from 'react-redux';
import SideButtons from '../components/sideButtons';
import { getSideBarWidth, getButtonsActiveStatus, getSideBarPos } from '../lib/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    width: getSideBarWidth(state),
    renderButtons: getButtonsActiveStatus(state),
    side: getSideBarPos(state)
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideButtons);
