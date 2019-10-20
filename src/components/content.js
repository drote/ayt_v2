import React from 'react';
import EditableThumb from '../containers/editableThumb';
import ToggleNewThumb from './toggleNewThumb';
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
		editingEnabled
	}) => {

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
						    				editing={idx === editingThumb}
						    				editingEnabled={editingEnabled}
						    			/>
						    	))
			    			}
			    			{
			    				editingEnabled ?
			    					<ToggleNewThumb />
			    				:
			    					null
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