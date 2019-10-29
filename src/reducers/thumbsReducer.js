import { tempResults } from '../lib/tmp';

const thumbsReducer = (state = [...tempResults], action) => {
	switch (action.type) {
		default:
			return state;
	}
}

export default thumbsReducer;