import React from 'react';
import logo from './../logo.png';
import NavSearchBar from './navSearchBar';
import NavResultDisplay from './navResultDisplay';

const TopNav = ({ status, onSearch, heading, img, width, side, homePage }) => {
	return (
		<header
			style={{
				float: side,
				width: `${width}%`
			}}>

			<div className="ui borderless menu">

				<a className="item">
					<i className="big settings icon"></i>
				</a>

				<a className="item">
					<i className="big user icon"></i>
				</a>

				{
					homePage ?
						<a className="ui icon item">
		          <i className="big edit icon"></i>
		        </a>
		      :
		      null
		    }
		    
				{
					status === 'active' ?
						<NavResultDisplay
							heading={heading}
							imgUrl={img}
						/>
					:
						<NavSearchBar
							onSearch={onSearch}
							loading={status === 'loading'}
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