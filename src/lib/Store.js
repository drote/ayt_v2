import { createStore as cs } from 'redux';

function reducer(state = {}, action) {
	return {

	}
}

export function createStore(initialState = {}) {
	return cs(reducer, initialState);
}