import React from 'react';
import Content from '../containers/content';
import TopNav from '../containers/topNav';
import { editingEnabled } from '../lib/helpers';

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.props.history.listen((location) => {
			this.toggleScrolling(location);
		});
	}

	componentDidMount() {
		this.toggleScrolling(this.props.location);
	}

	toggleScrolling = (newLocation) => {
		if (editingEnabled(newLocation)) {
			document.body.style.overflow = 'scroll';
		} else {
			document.body.style.overflow = 'hidden';
		}
	}

	render() {
		return (
			<React.Fragment>
		    <TopNav location={this.props.location} />
		    <Content location={this.props.location} />
			</React.Fragment>
		)
	}
}

export default Main;