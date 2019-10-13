import { createStore as cs } from 'redux';

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
			rowNumber: 4,
			pageN: 1,
			selectedThumb: 1,
		}
	}
}

export function createStore(initialState = {}) {
	return cs(reducer, initialState);
}