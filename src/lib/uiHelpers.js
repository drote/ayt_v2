export const calculateThumbHeight = (colN) => {
	return {
		'1': '86',
		'2': '43',
		'3': '28',
		'4': '22',
		'5': '17',
	}[colN];
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