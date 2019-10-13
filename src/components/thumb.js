import React from 'react';
import { titleAndImageSize } from '../lib/uiHelpers';
import LinesEllipsis from 'react-lines-ellipsis'

const Thumb = ({ imgSrc, title, height, selected, selectedBorderColor, textRowNumber }) => {
	const selectedBorder = `3px ${selectedBorderColor} solid`;
	const regularBorder = '1px black solid';
	const sizes = titleAndImageSize(height);
	const imageClass = `ui centered ${sizes.image} image`;

	return (
		<div
			className="column"
			style={{
				height: `${height}vh`,
				border: `${selected ? selectedBorder : regularBorder}`,
			}}
		>
		  <div className="ui fluid card thumbnail">

		  	<div className="ui img centered container">
			    <img
			    	className={imageClass}
			    	src={imgSrc}
			    />
			  </div>

		    <div className="content">
		      <h1
		      	style={{
		      		fontSize: sizes.title
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

export default Thumb;