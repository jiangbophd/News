/**
 * Created by Richard on 12/24/17.
 */
import { createAction } from 'redux-actions';
import * as actionTypes from './home-constants';

export const getHomeNewsData = createAction(actionTypes.GET_HOME_NEWS);
export const successGetHomeNewsData = createAction(actionTypes.SUCCESS_GET_HOME_NEWS);
export const failedGetHomeNewsData = createAction(actionTypes.FAILED_GET_HOME_NEWS);


export const loadMoreNewsData = createAction(actionTypes.LOAD_MORE_NEWS_DATA);
export const successLoadMoreNewsData = createAction(actionTypes.SUCCESS_LOAD_MORE_NEWS_DATA);
export const failedLoadMoreNewsData = createAction(actionTypes.FAILED_LOAD_MORE_NEWS_DATA);

