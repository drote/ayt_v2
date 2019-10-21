import { connect } from 'react-redux';

import SettingsModal from '../components/settingsModal';

import {
	getSettings
} from '../lib/selectors';

const mapStateToProps = (state, ownProps) => {
	const settings = getSettings(state);
	return {
		settings,
		history: ownProps.history
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {

	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SettingsModal);