import {combineReducers} from 'redux';
import postReducer from './posts/postsReducer';

const rootReducer = combineReducers({posts: postReducer});

export default rootReducer;

