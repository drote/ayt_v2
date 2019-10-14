import { createStore as cs } from 'redux';
import { tempResults } from './tmp';

function reducer(state = {}, action) {
	return {
		ui: {
			
			sideBarWidth: '10',
			sideBarPosition: 'left',
			showActionButtons: false,
			heading: {
				position: 'right',
				status: 'waiting',
				imgUrl: 'https://i.ytimg.com/vi/J5wuB_p63YM/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC09e8FjLfUzzhADR5WOVyJIueCIg',
				title: 'A thing',
				width: '90'
			},
			content: {
				status: 'active',
				colNumber: 2,
				rowNumber: 4,
				pageN: 0,
				selectedThumb: 0,
				selectedBorderColor: 'red',
			}
		},
		content: tempResults,
	}
}

export function createStore(initialState = {}) {
	return cs(reducer, initialState);
}