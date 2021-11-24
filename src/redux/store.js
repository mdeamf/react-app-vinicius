import { createStore, applyMiddleware, combineReducers } from 'redux';
import  createSagaMiddleware from 'redux-saga';
import rootSaga from '../redux/saga/rootSaga'
import login from './ducks/LoginRedux';
import loading from './ducks/LoadingRedux';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    login,
    loading,
  }),
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export default store;