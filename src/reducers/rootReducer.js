import { tempResults } from '../lib/tmp';

const rootReducer = (state = {}, action) => {
	return {
		heading: {
			imgUrl: '',
			title: 'Daniels home page',
		},
		settings: {
			userName: 'Daniel',
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
		content: {
			pageN: 0,
			thumbs: tempResults
		},
		selectedThumb: 0,
		mode: 'viewing results',
		searchStatus: 'active',
		modalContent: {
			active: false,
			thumbIdx: false,
			images: ['https://i.ytimg.com/vi/J5wuB_p63YM/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC09e8FjLfUzzhADR5WOVyJIueCIg'],
			title: 'Title',
			url: 'www.youtube.com/aviewishere'
		}
	}
}

export default rootReducer;