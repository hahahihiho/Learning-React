
import {createAction, handleActions} from 'redux-actions';
// createAction : 함수를 자동으로 생성. type과 payload라는 이름으로 변수 생성
// handleActions : switch 함수를 json 객체로 받음

// module area
// 1. init state
// 2. define action type
// 3. create action function
// 4. reducer (handle action)

const initialState = { number: 0, color: '#000' };

const ACT_ADD = 'Counter/ACT_ADD';
const ACT_RESET = 'Counter/ACT_RESET';

// 3. action 생성 함수 (type, parameter를 reducer에 전달) -> store에 dispatch로 연결
export const actionAddNum = (value) => ({type:ACT_ADD,payload:value});
export const actionResetNum = () => ({type:ACT_RESET})
// export const actionAddNum = createAction(ACT_ADD);
// export const actionResetNum = createAction(ACT_RESET);


// 4-1. reducer
// 액션값이 ~일 때, 상태값을 ~로 변경한다는 명령 수행
// 최초 실행시 init값 을 가져옴
const myCountReducer = (state =initialState, action=null) => {
    console.log(action);

    let numberValue = 0;
    let colorValue = "#000";
    
    switch (action.type){
        case ACT_ADD:   numberValue = state.number + action.payload; break;
        case ACT_RESET: numberValue = 0; break;
        default: return state;
    }
    if (numberValue >0){colorValue = '#2f77eb';}
    else if (numberValue <0){colorValue = '#f60';}
    else {colorValue = "#000"}
    
    return {number: numberValue, color: colorValue};
}

// 4-2.
// js 객체 키값.
// const a = "Hello";
// const x = {[a]:100,[b]:200};
// x.Hello -> 100
// / 는 직접적으로 키로 쓸 수 없
// const myCountReducer = {
//     [ACT_ADD]: function(state,action){
//         const numberValue = state.number + action.payload;
//         let colorValue = "#000";
//         if (numberValue > 0) {colorValue="#2f77eb";}
//         else if (numberValue < 0) {colorValue="#f60";}
//         else{colorValue="#000";}

//         return {number:numberValue,color:colorValue};
//     },
//     [ACT_RESET]: function(state,action){
//         return {number:0,color:"#000"};
//     }
// }

// 5. store 생성 -> 상태값, action, reducer 함수가 포함된 객체 생성
// const store = Redux.createStore(myCountReducer);
const MyCounterModule = myCountReducer;
// const MyCounterModule = handleActions(myCountReducer,initialState);
export default MyCounterModule;