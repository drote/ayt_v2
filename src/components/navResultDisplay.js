import React from 'react';

const NavResultDisplay = ({ heading, imgUrl }) => {
	return (
		<div className="right item">
			<div className="ui items">
				<div className="item">

					<div className="middle aligned content">
						<div className="header">{heading}</div>
					</div>

					{
						imgUrl ? 
							<div id="header-image" className="ui small image">
			  					<img src={imgUrl} />
							</div>
						:
							null
					}

				</div>
			</div>
		</div>
	)
}

export default NavResultDisplay;