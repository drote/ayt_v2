import React from 'react';
import EditableThumb from '../containers/editableThumb';
import { numToWord } from '../lib/helpers';
import { contentForPage } from '../lib/helpers';

const Content = ({
		status,
		content,
		selectedThumb,
		editingThumb,
		resultsPerPage,
		pageN,
		gridClass,
		location
	}) => {

	return (
	  <div id="content">
	    	{
	    		{
	    			'active': (
	    				<div className={gridClass}>
		    				{
				    			contentForPage(content, pageN, resultsPerPage)
				    				.map((t, idx) => (
					    				<EditableThumb
						    				key={idx}
						    				title={t.title}
						    				imgSrc={t.imgUrl}
						    				vidId={t.vidId}
						    				fullUrl={t.url}
						    				selected={idx === selectedThumb}
						    				editing={idx === editingThumb}
						    				location={location}
						    			/>
						    	))
			    			}
		    			</div>
	    			),
	    			'loading': (
				    	<div className="ui massive active loader"></div>
						),
	    			'inactive': null
	    		}[status]
	    	}
	  </div>
	)
}

export default Content;