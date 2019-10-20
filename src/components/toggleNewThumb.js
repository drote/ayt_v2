import React from 'react';
import ThumbModal from './thumbModal';

class ToggleNewThumb extends React.Component {
	state = {
		showModal: false
	}

	render() {
		return (
			showModal ?
				<ThumbModal />
			:
				<div
					className="column"
					style={{height: this.props.height}}
				>

					<div className="ui fluid card thumbnail">
						<div className="ui basic center aligned segment">
							<button className="ui icon button huge circular">
								<i class="add icon"></i>
							</button>
						</div>
					</div>
					
				</div>
		)
	}
}