/**
 * Created by Richard on 12/24/17.
 */
import { handleActions, combineActions } from 'redux-actions';
import { combineReducers } from 'redux';
import * as actionTypes from './home-constants';

export const getNewsData = handleActions(
  {
    [actionTypes.GET_HOME_NEWS]: (state, action) => [...state],
    [actionTypes.SUCCESS_GET_HOME_NEWS]: (state, action) => [...action.payload],
    [combineActions(actionTypes.FAILED_GET_HOME_NEWS)]: (state, action) => [...state]
  },
  []
);

export default combineReducers({
  getNewsData,
});
