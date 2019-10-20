import React from 'react';
import { titleAndImageSize } from '../lib/uiHelpers';
import LinesEllipsis from 'react-lines-ellipsis'

const Thumb = ({
	title,
	imgSrc,
	height,
	editMode,
	selected,
	textRowNumber,
	titleSize,
	imageClass,
	selectedBorderStyle,
	regularBorderStyle
}) => {
	return (
		<div
			className="column"
			style={{
				height,
				border: `${selected ? selectedBorderStyle : regularBorderStyle}`,
			}}
		>
		  <div className="ui fluid card thumbnail">

		  	{
		  		editMode ?
		  			<div>
				  		<a class="ui yellow right corner label">
				        <i class="edit icon"></i>
				      </a>

				      <a class="ui left red corner label">
				        <i class="remove icon"></i>
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

export default Thumb;