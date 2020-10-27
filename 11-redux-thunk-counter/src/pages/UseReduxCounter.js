import React from 'react';
// 컴포넌트와 action함수 연결
import {connect} from 'react-redux';
// 리듀서에 정의된 action함수들을 참조
import {actionAddNum, actionResetNum} from '../reducers/Counter'


// 전체 App을 리덕스에 구독시키면, 컴포넌트의 props에 reducer가 정의하고 있는 action함수 및 state값이 포함되어 넘어온다.
// props = {number:0,color:"#000",functions:f}
const UseReduxCounter = (store) => {
    const {number, color, actionAddNum, actionResetNum} = store;
    return (
        <div>
            <h2>UseReduxCounter</h2>
            <h3 style={{color:color}}>{number}</h3>
            <div>
                <button onClick={(e)=>{actionAddNum(3);}}>+3</button>
                <button onClick={(e)=>{actionAddNum(-1);}}>-1</button>
                <button onClick={(e)=>{actionResetNum();}}>reset</button>
            </div>
        </div>
    );
};

// index.js 에서 provide로 제공된 rootReducer 부터 conterModule을 들고옴
const getStore = (store) => ({
    number: store.counterModule.number,
    color: store.counterModule.color
});
const actions = {actionAddNum, actionResetNum};
// store에 연결 -> 함수 return
const dispatch = connect(getStore,actions);
export default dispatch(UseReduxCounter);
