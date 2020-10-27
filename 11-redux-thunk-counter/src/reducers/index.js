/**
 * action 값과 action 생성 함수들을 하나로 묶음
 */

import {combineReducers} from 'redux';
import counterModule from './Counter'; // redux store

 const rootReducer = combineReducers({
    // 가져온 module(reducer용으로 정의된 함수)들은 ,로 구분
    counterModule,

 })

 export default rootReducer;