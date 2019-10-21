import React from 'react';
import logo from './../logo.png';
import { Link, Redirect } from 'react-router-dom'
import NavSearchBar from './navSearchBar';
import NavResultDisplay from './navResultDisplay';
import { editingEnabled, searchPage } from '../lib/helpers';
import { homepage, homepageEdit } from '../constants/urls';

const TopNav = ({ status, onSearch, heading, img, width, side, homePage, location }) => {
	const settingsHref = editingEnabled(location) ? homepage : homepageEdit;
	const onSearchPage = searchPage(location);

	return (
		<header
			style={{
				float: side,
				width
			}}>

			<div className="ui borderless menu">

				<Link
					to="/settings"
					className="item"
					
				>
					<i className="big settings icon"></i>
				</Link>

				<Link
					to="/home"
					className="item">
					<i className="big user icon"></i>
				</Link>

				{
					homePage ?
						<Link
							to={settingsHref}
							className="ui icon item"
						>
		          <i className="big edit icon"></i>
		        </Link>
		      :
		      null
		    }
		    
				{
					onSearchPage ?
						<NavSearchBar
							onSearch={onSearch}
							loading={status === 'loading'}
						/>
					:
						<NavResultDisplay
							heading={heading}
							imgUrl={img}
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