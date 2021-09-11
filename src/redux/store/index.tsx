import { applyMiddleware, createStore } from 'redux';
import * as thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';

import rootReducer from '../reducers';

let middlewares = [thunk.default];

const persistConfig = {
  key: 'SuperHeroes',
  storage: AsyncStorage,
  whitelist: ['favoriteHeroes'],
  blacklist: ['heroes', 'searchHeroes'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(...middlewares));

const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;

export { store, persistor };
