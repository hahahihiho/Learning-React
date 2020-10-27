import React from 'react';

function setCounterValue(state,action) {
    console.log(action)
    switch (action) {
        case "UP": return state + 1;
        case "DOWN" : return state -1;
        default: return 0;
    }
}


const MyReducer = () => {
    /**
     * setCounterValue: setMyCounter가 호출됨에 따라 간접적으로 호출될 함수
     */
    const [myCounter, setMyCounter] = React.useReducer(setCounterValue, 0);
    
    // const upndown = useRef();
    // useEffect(() => {
    //     upndown.dispatchEvent(new KeyboardEvent('keypress', {
    //     key: 'up-arrow',
    //     }));
    // }, []);
    
    return (
        <div>
            <p> {myCounter} </p>
            <button onClick={e=>setMyCounter("UP")}>UP</button>
            <button onClick={e=>setMyCounter("DOWN")}>DOWN</button>
            <button onClick={e=>setMyCounter(0)}>RESET</button>
        </div>
    );
};

export default MyReducer;