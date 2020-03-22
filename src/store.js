import { applyMiddleware, createStore } from 'redux';
import reduxLogger from 'redux-logger'

import rootReducer from './reducers';

const middlewares = [reduxLogger];

export default createStore(rootReducer, applyMiddleware(...middlewares));