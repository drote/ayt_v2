import React from 'react';
import EditableThumb from '../containers/editableThumb';
import ToggleNewThumb from './toggleNewThumb';
import { numToWord } from '../lib/helpers';
import { contentForPage } from '../lib/helpers';

const Content = ({
		status,
		content,
		selectedThumb,
		editedThumbIdx,
		resultsPerPage,
		pageN,
		gridClass,
		editingEnabled,
		onSearchPage
	}) => {
	if (onSearchPage) return null;

	const contentToRender = editingEnabled ? content :
		contentForPage(content, pageN, resultsPerPage);

	return (
	  <div id="content">
	    	{
	    		{
	    			'active': (
	    				<div className={gridClass}>
		    				{
				    			contentToRender.map((t, idx) => (
					    				<EditableThumb
						    				key={idx}
						    				title={t.title}
						    				imgSrc={t.imgUrl}
						    				vidId={t.vidId}
						    				fullUrl={t.url}
						    				selected={idx === selectedThumb}
						    				editing={idx === editedThumbIdx}
						    				editingEnabled={editingEnabled}
						    				status={status}
						    			/>
						    	))
			    			}
			    			{
			    				editingEnabled ?
			    					<ToggleNewThumb
			    						status={status}
			    					/>
			    				:
			    					null
			    			}
		    			</div>
	    			),
	    			'loading': (
				    	<div className="ui massive active loader"></div>
						)
	    		}[status]
	    	}
	  </div>
	)
}

export default Content;