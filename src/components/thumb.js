import React from 'react';

const Thumb = ({ imgSrc, title, height }) => {
	return (
		<div className="column" style={{height: `${height}vh`}}>
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