import React from 'react';

const MyCallback = () => {
    const [myText, setMyText] = React.useState("Hello");

    // component가 최초 랜더링 될때 1회만 정의
    // event handler 가 중복 정의되는것을 방지
    const onInputChange = React.useCallback( (e) => {
        setMyText(e.currentTarget.value);
    },[])

    return (
        <div>
            <h3>{myText}</h3>
            <input onChange={onInputChange}></input>   
        </div>
    );
};

export default MyCallback;