const imageSize = (rowN) => {
	return titleAndImageSize(thumbHeight(rowN)).image;
}

const thumbHeight = (rowN) => {
	return {
		'1': '86',
		'2': '43',
		'3': '28',
		'4': '22',
		'5': '17',
	}[rowN];
}

const numToWord = (n) => {
	return {
		'1': 'one',
		'2': 'two',
		'3': 'three',
		'4': 'four',
		'5': 'five'
	}[n];
}

export const thumbHeightStyle = (rowN) => {
	return `${thumbHeight(rowN)}vh`;
}

export const textRowNumber = (rowN) => {
	return {
		'1': '6',
		'2': '4',
		'3': '2',
		'4': '2',
		'5': '2',
	}[rowN];
}

export const titleAndImageSize = (thumbHeight) => {
	return {
		'86': {title: '2.5rem', image: 'massive'},
		'43': {title: '2rem', image: 'large'},
		'28': {title: '1.3rem', image: 'medium'},
		'22': {title: '1.3rem', image: 'small'},
		'17': {title: '0.9rem', image: 'small'}
	}[thumbHeight];
}

export const selectedBorderStyle = (color) => `3px ${color} solid`;
export const regularBorderStyle = () => '1px black solid';
export const imageClass = (rowN) => `ui centered ${imageSize(rowN)} image`;
export const titleSize = (rowN) => titleAndImageSize(thumbHeight(rowN)).title;
export const gridClass = (colN) => `ui ${numToWord(colN)} column grid`;