import React from 'react';


const SideButtons = ({ width, renderButtons, side }) => {
	return (
		<div id="side-buttons" style={{
			float: side,
			width: `${width}%`
		}}>
		
		</div>
	)
}

export default SideButtons;