import React from 'react';

const Thumb = ({ imgSrc, title, height, selected, selectedBorderColor }) => {
	const selectedBorder = `3px ${selectedBorderColor} solid`;
	const regularBorder = '1px black solid';

	return (
		<div
			className="column"
			style={{
				height: `${height}vh`,
				border: `${selected ? selectedBorder : regularBorder}`
			}}
		>
		  <div className="ui fluid card thumbnail">
		    <img className="ui centered small rounded image" src={imgSrc} />
		    <div className="content">
		      <h4 className="ui header">{title}</h4>
		    </div>
		  </div>
		</div>
	)
}

export default Thumb;