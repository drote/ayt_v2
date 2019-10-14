import React from 'react';
import Thumb from './thumb';
import { numToWord } from '../lib/helpers';
import { textRowNumber } from '../lib/uiHelpers';

const contentForPage = (content, pageN, cPP) => {
	const str = pageN * cPP;
	const end = str + cPP;

	return content.slice(str, end);
}

const Content = ({
		status,
		content,
		colN,
		rowN,
		thumbHeight,
		selectedThumb,
		selectedBorderColor,
		resultsPerPage,
		pageN,
		editMode
	}) => {
	const gridClass = `ui ${numToWord(colN)} column grid`;

	return (
	  <div id="content">

	    	{
	    		{
	    			'active': (
	    				<div className={gridClass}>
		    				{
				    			contentForPage(content, pageN, resultsPerPage)
				    				.map((t, idx) => (
					    				<Thumb
						    				key={idx}
						    				title={t.title}
						    				imgSrc={t.imgUrl}
						    				vidId={t.vidId}
						    				height={thumbHeight}
						    				selected={idx === selectedThumb}
						    				selectedBorderColor={selectedBorderColor}
						    				textRowNumber={textRowNumber(rowN)}
						    				editable={editMode}
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