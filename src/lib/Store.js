import { createStore as cs } from 'redux';
import { tempResults } from './tmp';

// mode = 'viewing results' || 'editadd resource' || 'playing video'

function reducer(state = {}, action) {
	return {
		content: {
			pageN: 0
		},
		heading: {
			imgUrl: 'https://i.ytimg.com/vi/J5wuB_p63YM/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC09e8FjLfUzzhADR5WOVyJIueCIg',
			title: 'A thing',
		},
		settings: {
			gaActive: true,
			gaRestMode: false,
			clickDelay: 5000,
			selectDelay: 2500,
			rowNumber: 4,
			colNumber: 3,
			backgroundColor: '#a7a7a7',
			highlightColor: '#ff0000',
			sideBarPosition: 'left',
			sideBarWidth: '10',
			openInYT: false,
			showActionButtons: false
		},
		content: tempResults,
		selectedThumb: 0,
		mode: 'viewing results',
		searchStatus: 'active',
		modalContent: {
			active: true,
			thumbIdx: 0,
			images: ['https://i.ytimg.com/vi/J5wuB_p63YM/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC09e8FjLfUzzhADR5WOVyJIueCIg'],
			title: 'Title',
			url: 'www.youtube.com/aviewishere'
		}

	}
}

export function createStore(initialState = {}) {
	return cs(reducer, initialState);
}