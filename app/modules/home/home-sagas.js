/**
 * Created by Richard on 12/24/17.
 */
import { call, put, fork, take, select } from 'redux-saga/effects';
import * as actionTypes from './home-constants';
import callApi from '../../utils/api';
import * as actions from './home-actions';
import * as types from './home-constants';
import { getStartPosition } from './home-selectors';
import { formatImg } from '../../utils/helpers';
import { API_KEY, COUNT_NUMBER } from '../../utils/config';


function* getNewsDataFlow() {
  while(true){
    try {
      yield take(types.GET_HOME_NEWS);
      const response = yield call(callApi, {
        endpoint: 'jisuapi/get?channel=头条&num=' + COUNT_NUMBER + '&start=0&appkey=' + API_KEY,
        options: {
          method: 'GET'
        }});
      if(response.code === '10000'){
        let result = [];
        response.result.result.list.forEach((item) => {
          item.content = formatImg(item.content);
          result.push(item);
        });
        console.log('====', result.length);
        yield put(actions.successGetHomeNewsData(result));
      }else{
        yield put(actions.failedGetHomeNewsData([]));
      }
    } catch (error) {
      yield put(actions.failedGetHomeNewsData([]));
    }
  }
}

function* loadMoreNewsDataFlow() {
		while(true){
				try {
						yield take(types.LOAD_MORE_NEWS_DATA);
						let startPosition = yield select(getStartPosition);
						console.log(startPosition);
						const response = yield call(callApi, {
								endpoint: 'jisuapi/get?channel=头条&num=' + COUNT_NUMBER + '&start=' + startPosition + '&appkey=80e542b23d128d1c2b7db6b0a11bfe13',
								options: {
										method: 'GET'
								}});
						if(response.code === '10000'){
								console.log('#####', response.result.result.list.length);
								yield put(actions.successLoadMoreNewsData(response.result.result.list));
						}else{
								yield put(actions.failedLoadMoreNewsData([]));
						}
				} catch (error) {
						yield put(actions.failedLoadMoreNewsData([]));
				}
		}
}




export default [
  fork(getNewsDataFlow),
  fork(loadMoreNewsDataFlow)
];
