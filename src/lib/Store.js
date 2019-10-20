import { createStore as cs } from 'redux';
import { tempResults } from './tmp';

// mode = 'viewing results' || 'editadd resource' || 'playing video'

function reducer(state = {}, action) {
	return {
		ui: {
			sideBar: {
				width: '10',
				position: 'left',
				showActionButtons: false
			},
			heading: {
				position: 'right',
				imgUrl: 'https://i.ytimg.com/vi/J5wuB_p63YM/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC09e8FjLfUzzhADR5WOVyJIueCIg',
				title: 'A thing',
				width: '90'
			},
			content: {
				colNumber: 1,
				rowNumber: 1,
				pageN: 0
			},
			thumb: {
				selectedBorderColor: 'red'
			},
			modal: {
				title: '',
				imgUrl: '',
				resourceUrl: ''
			}
		},
		content: tempResults,
		selectedThumb: 0,
		mode: 'viewing results',
		searchStatus: 'active',
		newVideo: {
			images: [],
			title: ''
		}

	}
}

export function createStore(initialState = {}) {
	return cs(reducer, initialState);
}