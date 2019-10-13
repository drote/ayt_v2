import React from 'react';
import { Link } from 'react-router-dom';
import { search } from '../constants/urls';

class navSearchBar extends React.Component {
	state = {
		value: '',
	}

	onChange = (evt) => {
		this.setState({
			value: evt.target.value,
		});
	}

	render() {
		return (	
			<div id="search-bar" className="item right borderless">
				<div
					className="ui huge input"
				>

					<Link to={search(this.state.value)}>
					  <button
					  	className="ui huge icon button"
					  >
					    <i className="search icon"></i>
					  </button>
					</Link>

				  <input
				  	type="text"
				  	placeholder="חפש"
				  	onChange={this.onChange}
				  	value={this.state.value}
				  />

				</div>
			</div>
		)
	}
}

export default navSearchBar;