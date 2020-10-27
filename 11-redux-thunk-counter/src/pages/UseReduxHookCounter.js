import React from 'react';

// react-redux 에서 제공하는 hook 함수
// rendering이 많아짐.
import {useSelector,useDispatch} from 'react-redux';
import {addAsync as actionAddNum,actionResetNum} from '../reducers/Counter';

const UseReduxHookCounter = () => {
    const {number,color} = useSelector(state => state.counterModule);
    const dispatch = useDispatch();

    return (
        <div>
            <h3 style={{color:color}}>{number}</h3>
            <div>
                <button onClick={(e)=>{dispatch(actionAddNum(3));}}>+3</button>
                <button onClick={(e)=>{dispatch(actionAddNum(-1));}}>-1</button>
                <button onClick={(e)=>{dispatch(actionResetNum());}}>reset</button>
            </div>
        </div>
    );
};

// export default UseReduxHookCounter;
// memo 로 감싸면서 자동 최적화
export default React.memo(UseReduxHookCounter);