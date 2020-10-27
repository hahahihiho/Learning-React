import React from 'react';

const Expr = () => {
    const name = "리액트";
    const age = 20;
    const color = "#f00";
    const msg = "가나다라 마바사 아자차 카타파하하하하하 라라라 다다다 크크";

    const myEllipsis = (msg,len) => {
        let str = msg;
        if (str.length>len) {
            str = str.substring(0, len) + "...";
        }
        return str;
    };

    return (
        <div>
            <h2>Expr <small>(jsx 기본 표현식)</small> </h2>
            {name} 님은 {age+1}세 입니다.
            <p>
                <font color={color}>{name}</font>님은&nbsp; 리액트 개발자
            </p>
            {/* 사용자 정의 함수 호출하기 */}
            <blockquote>
                {myEllipsis(msg,12)}
            </blockquote>
        </div>
    );
};

export default Expr;