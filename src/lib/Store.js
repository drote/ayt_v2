import { createStore as cs, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from '../reducers/rootReducer';

// mode = 'viewing results' || 'editadd resource' || 'playing video'

export const createStore = () => {
	return cs(rootReducer, applyMiddleware(thunkMiddleware));
}