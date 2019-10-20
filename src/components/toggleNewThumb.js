import React from 'react';
import ThumbModal from '../containers/thumbModal';

class ToggleNewThumb extends React.Component {
	state = {
		showModal: false
	}

	render() {
		return (
			this.state.showModal ?
				<ThumbModal />
			:
				<div className="column">
					<div className="ui basic segment">
						<button className="ui fluid blue icon button massive">
							<i class="add icon"></i>
						</button>
					</div>
				</div>
		)
	}
}

export default ToggleNewThumb;