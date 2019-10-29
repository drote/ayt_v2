import React from 'react';
import { titleAndImageSize, regularBorderStyle } from '../lib/uiHelpers';
import LinesEllipsis from 'react-lines-ellipsis'
// import { getSelectedThumbIdx } from '../lib/selectors';

class Thumb extends React.Component {
	// state = {
	// 	selected: false,
	// }

	// componentDidMount() {
	// 	if (this.props.selectedThumbIdx === this.props.idx) {
	// 		this.setState({ selected: true });
	// 	}
	// }

	// static getDerivedStateFromProps(newProps, state) {
	// 	// if (newProps.selected) {
	// 	// 	return { selected: true };
	// 	// } else {
	// 	// 	return { selected: false };
	// 	// }
	// }

	render() {
		const {
			title,
			imgSrc,
			height,
			editMode,
			selected,
			textRowNumber,
			titleSize,
			imageClass,
			selectedBorderStyle
		} = this.props;

		return (
			<div
				className="column"
				style={{
					height,
					border: `${selected ? selectedBorderStyle : regularBorderStyle()}`,
				}}
			>
			  <div className="ui fluid card thumbnail">

			  	{
			  		editMode ?
			  			<div>
					  		<a className="ui yellow right corner label">
					        <i className="edit icon"></i>
					      </a>

					      <a className="ui left red corner label">
					        <i className="remove icon"></i>
					      </a>
					    </div>
				    :
				    	null
			  	}

			  	<div className="ui img centered container">
				    <img
				    	className={imageClass}
				    	src={imgSrc}
				    />
				  </div>

			    <div className="content">
			      <h1
			      	style={{
			      		fontSize: titleSize
			      	}}
			      >
			      	<LinesEllipsis
							  text={title}
							  maxLine={textRowNumber}
							  ellipsis='...'
							  trimRight
							  basedOn='letters'
							/>
			      </h1>
			    </div>
			  </div>
			</div>
		)
	}
}

// }

export default Thumb;