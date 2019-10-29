const selectedThumbReducer = (state = { idx: 0 }, action) => {
	switch (action.type) {
		case 'MOVE':
			return { ...state, idx: action.payload.targetIdx };
		default:
			return state;
	}
}

export default selectedThumbReducer;