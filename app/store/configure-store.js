import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import rootReducer from '../reducers';

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
		let createStoreWithMiddleware;
		
		if(__ENV__ === 'dev'){
				const composeEnhandcers = window.__REDUX_DEVTOOLS_EXTENDSION_COMPOSE || compose;
				createStoreWithMiddleware = composeEnhandcers(applyMiddleware(sagaMiddleware, thunk, logger))(createStore);
		}else{
				createStoreWithMiddleware = compose(applyMiddleware(sagaMiddleware, thunk, logger))(createStore);
		}
		
		const store = createStoreWithMiddleware(rootReducer);
		sagaMiddleware.run(rootSaga);
		if(module.hot){
				module.hot.accept('../reducers', () => {
						const nextRootReducer = require('../reducers');
						store.replaceReducer(nextRootReducer);
				})
		}
		return store;
}