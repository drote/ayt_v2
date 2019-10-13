import { createStore as cs } from 'redux';

function reducer(state = {}, action) {
	return {
		ui: {
			pageHeading: 'A thing',
			pageHeadingImg: 'https://i.ytimg.com/vi/J5wuB_p63YM/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC09e8FjLfUzzhADR5WOVyJIueCIg'
		}
	}
}

export function createStore(initialState = {}) {
	return cs(reducer, initialState);
}