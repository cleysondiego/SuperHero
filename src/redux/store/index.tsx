import { applyMiddleware, createStore } from 'redux';
import * as thunk from 'redux-thunk';

import reducers from '../reducers';

let middlewares = [thunk.default];

const store = createStore(reducers, applyMiddleware(...middlewares));

export type AppDispatch = typeof store.dispatch;

export default store;
