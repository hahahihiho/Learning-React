import React from 'react';

import MyChildrenSub from '../component/MyChildrenSub';

const MyChildren = () => {
    return (
        <div>
            {/* props 전달시 문자열 이외의 데이터 타입은 중괄호 */}
            <MyChildrenSub width = {400} height={100}><b>Hello</b>Hello</MyChildrenSub>
            <MyChildrenSub width = {300} height={80}>World</MyChildrenSub>
            <MyChildrenSub width = {200} height={50}></MyChildrenSub>
        </div>
    );
};

export default MyChildren;