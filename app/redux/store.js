import {createStore, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';
import reducer from './reducer';
const middleWare = [];

let sagaMiddleware = null;
let store = null;

sagaMiddleware = createSagaMiddleware();
middleWare.push(sagaMiddleware);
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
store = createStore(
  reducer,
  {},
  composeEnhancers(applyMiddleware(...middleWare)),
);
sagaMiddleware.run(rootSaga);

export default store;
