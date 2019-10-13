import React from 'react';

const NavResultDisplay = ({ title, imgUrl }) => {
	return (
		<div class="right item">
			<div class="ui items">
				<div class="item">

					<div class="middle aligned content">
						<div class="header">{title}</div>
					</div>

					{
						imgUrl ? 
							<div id="header-image" class="ui small image">
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