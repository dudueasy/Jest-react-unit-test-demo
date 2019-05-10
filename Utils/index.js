import checkPropTypes from 'check-prop-types';
import {applyMiddleware, createStore} from 'redux';
import rootReducer from '../src/reducers/index';
import {middlewares} from '../src/createStore';

export const findByDataTest = (wrapper, attr) => {
  return wrapper.find(`[data-test='${attr}']`);
};

// checkProps :
// // 1. return undefined when a component receives
// // proper props
// // 2. return a string when a component receives
// // invalid props

export const checkProps = (component, expectedProps) => {
  return checkPropTypes(
    component.propTypes,
    expectedProps,
    'props',
    component.name,
  );
};

export const testStore = (initialState) => {
  const createStoreWithMiddlewares = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddlewares(rootReducer, initialState);
};