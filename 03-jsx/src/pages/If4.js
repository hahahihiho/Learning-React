import React from 'react';

/**
 * 삼항연산자
 * 
 */

const If4 = () => {
    const isLogin = true
    return (
        <div>
            { isLogin === true ?
             <button type="button">로그아웃</button> :
             <button type="button">로그인</button>}
        </div>
    );
};

export default If4;