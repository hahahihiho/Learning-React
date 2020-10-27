/**
 * reducer를 모아놓은 index.js
 */

import { combineReducers } from 'redux';

import allReducer from './AllReducer';
import nowReducer from './NowReducer';

export default combineReducers({
    allReducer,
    nowReducer
});