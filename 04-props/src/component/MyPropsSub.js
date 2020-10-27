import React from 'react';

/**
 *  전달받는 변수
 */

const MyPropsSub = (props) => {
    return (
        <div>
            제 이름은 <b>{props.name}</b>이고  나이는 <b>{props.age}</b> 입니다.
        </div>
    );
};

// default 값 정의
MyPropsSub.defaultProps = {
    name: 'no-name',
    age: 99
}

export default MyPropsSub;