import React from 'react';
import EditableThumb from './editableThumb';
import ToggleNewThumb from './toggleNewThumb';
import { numToWord } from '../lib/helpers';
import { pageRange, editingEnabled } from '../lib/helpers';

class Content extends React.Component {
	constructor(props) {
		super(props);
		this.contentBox = React.createRef();
		this.props.history.listen((location) => {
			this.toggleScrolling(location);
		});
	}

	componentDidMount() {
		this.toggleScrolling(this.props.location);
		this.contentBox.current.focus();
	}

	toggleScrolling = (newLocation) => {
		if (editingEnabled(newLocation)) {
			document.body.style.overflow = 'scroll';
		} else {
			document.body.style.overflow = 'hidden';
		}
	}

	onKeyPressEvent = (evt) => {
		this.props.handleArrowPress(
			evt.key,
			this.props.selectedThumbIdx,
			this.props.rowLength,
			this.props.resultsPerPage
		);
	}

	render() {
		const {
			status,
			content,
			selectedThumbIdx,
			editedThumbIdx,
			resultsPerPage,
			pageN,
			gridClass,
			editingEnabled,
			onSearchPage
		} = this.props;

		const pageHiLo = pageRange(this.props.pageN, this.props.resultsPerPage);
		const contentToRender = editingEnabled ? content : content.slice(pageHiLo[0], pageHiLo[1]);

		return (
		  <div
		  	id="content"
		  	ref={this.contentBox}
		  	onKeyDown={this.onKeyPressEvent}
		  	tabIndex="0"
		  >
		    	{
		    		{
		    			'active': (
		    				<div className={gridClass}>
			    				{
					    			contentToRender.map((t, idx) => (
						    				<EditableThumb
							    				key={idx}
							    				title={t.title}
							    				imgSrc={t.imgUrl}
							    				vidId={t.vidId}
							    				fullUrl={t.url}
							    				editing={idx === editedThumbIdx}
							    				editingEnabled={editingEnabled}
							    				selected={this.props.content.indexOf(t) === selectedThumbIdx}
							    				status={status}
							    			/>
							    	))
				    			}
				    			{
				    				editingEnabled ?
				    					<ToggleNewThumb
				    						status={status}
				    					/>
				    				:
				    					null
				    			}
			    			</div>
		    			),
		    			'loading': (
					    	<div className="ui massive active loader"></div>
							)
		    		}[status]
		    	}
		  </div>
		)
	}
}

export default Content;