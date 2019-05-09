import {combineReducers} from 'redux';
import postReducer from './posts/postsReducer';

const rootReducer = combineReducers({postReducer});

export default rootReducer;

