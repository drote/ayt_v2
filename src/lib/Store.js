import { createStore as cs } from 'redux';
import { tempResults } from './tmp';

function reducer(state = {}, action) {
	return {
		ui: {
			pageHeading: 'A thing',
			pageHeadingImg: 'https://i.ytimg.com/vi/J5wuB_p63YM/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC09e8FjLfUzzhADR5WOVyJIueCIg',
			mainWidth: '90',
			sideBarWidth: '10',
			sideBarPosition: 'left',
			mainPosition: 'right',
			showActionButtons: false,
			colNumber: 5,
			rowNumber: 5,
			pageN: 1,
			selectedThumb: 0,
			selectedBorderColor: 'red'
		},
		content: tempResults,
	}
}

export function createStore(initialState = {}) {
	return cs(reducer, initialState);
}