import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import RootReducer from './reducers';

const middlewares = [thunk];

// applyMiddleware return a store enhancer,
// which receive storeCreator and return a new storeCreator
export const createStoreWithMiddlewares = applyMiddleware(...middlewares)(createStore);

export const store = createStoreWithMiddlewares(RootReducer);

