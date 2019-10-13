import React from 'react';
import logo from './../logo.png';
import NavSearchBar from './navSearchBar';
import NavResultDisplay from './navResultDisplay';

const TopNav = ({ displayingResults, onSearch, heading, img }) => {
	return (
		<header>
			<div className="ui borderless menu">

				<a className="item">
					<i className="big settings icon"></i>
				</a>

				<a className="item">
					<i className="big user icon"></i>
				</a>

				{
					displayingResults ?
						<NavResultDisplay
							heading={heading}
							imgUrl={img}
						/> 
					:
						<NavSearchBar
							onSearch={onSearch}
						/> 
				}

				<div className="right item">
					<div className="ui tiny image">
						<img src={logo} />
					</div>
				</div>
			</div>
		</header>
	)
}

export default TopNav;