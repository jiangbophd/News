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
        yield put(actions.successGetHomeNewsData(result));
      }else{
        yield put(actions.failedGetHomeNewsData([]));
      }
    } catch (error) {
      yield put(actions.failedGetHomeNewsData([]));
    }
  }
}




export default [
  fork(getNewsDataFlow)
];
