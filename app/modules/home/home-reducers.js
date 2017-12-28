/**
 * Created by Richard on 12/24/17.
 */
import { handleActions, combineActions } from 'redux-actions';
import { combineReducers } from 'redux';
import * as actionTypes from './home-constants';

export const getNewsData = handleActions(
	{
			[actionTypes.GET_HOME_NEWS]: (state, action) => [...state],
			[actionTypes.SUCCESS_LOAD_MORE_NEWS_DATA]: (state, action) => [...state, ...action.payload],
			[actionTypes.SUCCESS_GET_HOME_NEWS]: (state, action) => [...action.payload],
			[combineActions(actionTypes.FAILED_GET_HOME_NEWS, actionTypes.FAILED_LOAD_MORE_NEWS_DATA)]: (state, action) => [...state]
	},
	[]
);

export const showPullDownSpinner = handleActions(
	{
			[actionTypes.GET_HOME_NEWS]: (state, action) => action.payload,
			[combineActions(actionTypes.SUCCESS_GET_HOME_NEWS, actionTypes.FAILED_GET_HOME_NEWS)]: (state) => {
					state ? state() : null;
					return null;
			}
	},
	null
);

export const showLoadMoreSpinner = handleActions(
	{
			[actionTypes.LOAD_MORE_NEWS_DATA]: (state, action) => {
					return {state: true, callBack:action.payload};
			},
			[combineActions(actionTypes.SUCCESS_LOAD_MORE_NEWS_DATA, actionTypes.FAILED_LOAD_MORE_NEWS_DATA)]: (state, action) => {
					state.callBack ? state.callBack() : null;
					return {state: false, callBack:null};
			}
	},
	{state: false, callBack:null}
);

export const getStartPosition = handleActions(
	{
			[actionTypes.GET_HOME_NEWS]: (state, action) => 0,
			[combineActions(actionTypes.SUCCESS_LOAD_MORE_NEWS_DATA, actionTypes.SUCCESS_GET_HOME_NEWS)]: (state, action) => state + action.payload.length,
			[actionTypes.FAILED_LOAD_MORE_NEWS_DATA]: (state, action) => state
	},
	0
);

export default combineReducers({
  getNewsData,
  showPullDownSpinner,
  showLoadMoreSpinner,
	getStartPosition
});
