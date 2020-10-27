import React from 'react';

import Sub from './MySubComponent';

// 함수 이름은 혼선을 방지하기 위해서 소스파일 이름과 동일하게 구성하는것이 일반적.
const MyComponent1 = () => {
    return (
        <div>
            <h2>This is component1</h2>
            <p> 리액트 구조 연습중. </p>
            <Sub/>
        </div>
    );
}

// 다른곳에서 이파일을 import 해서 참조할 수 있게 내보낸다.
export default MyComponent1;