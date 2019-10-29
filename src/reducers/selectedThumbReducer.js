const selectedThumbReducer = (state = { idx: 0 }, action) => {
	switch (action.type) {
		case 'MOVE':
			return { ...state, idx: action.payload };
		default:
			return state;
	}
}

export default selectedThumbReducer;