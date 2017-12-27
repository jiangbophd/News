import { take } from 'redux-saga/effects';
import homeSagas from './modules/home/home-sagas';
export default function *rootSaga() {
		try{
				yield [...homeSagas];
				yield take('SAGA_CANCELED');
		}catch(e){
		
		}finally {
		
		}
}
