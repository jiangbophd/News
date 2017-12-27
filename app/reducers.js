import { combineReducers } from 'redux';
import HomeReducer from './modules/home/home-reducers';
const appReducer = combineReducers({
		home: HomeReducer
});

const rootReducer = (state, action) => {
		"use strict";
		if(action.type === 'LOGOUT'){
				state = undefined;
		}
		return appReducer(state, action);
};

export default rootReducer;
