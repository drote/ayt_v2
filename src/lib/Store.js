import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from '../reducers/rootReducer';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// mode = 'viewing results' || 'editadd resource' || 'playing video'

export const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
	applyMiddleware(thunkMiddleware)
));

// export const createStore = () => {
// 	return cs(rootReducer, applyMiddleware(thunkMiddleware));
// }