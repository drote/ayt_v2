import pageReducer from './pageReducer';
import thumbsReducer from './thumbsReducer';

const contentReducer = (state = {}, action) => {
	return {
		thumbs: thumbsReducer(state.thumbs, action),
		pageN: pageReducer(state.pageN, action)
	}
}

export default contentReducer;