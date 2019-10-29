import { tempResults } from '../lib/tmp';
import { pageRange } from '../lib/helpers';

const pageReducer = (state = 0, action) => {
	switch (action.type) {
		case 'MOVE':
			const pageHiLo = pageRange(state, action.payload.vidsPerPage);

			if (action.payload.targetIdx >= pageHiLo[1]) {
				return state + 1;
			} else if (action.payload.targetIdx < pageHiLo[0]) {
				return state - 1;
			}

			return state;
		default:
			return state;
	}
}

export default pageReducer;