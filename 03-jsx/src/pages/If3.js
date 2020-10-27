import React from 'react';

/**
 *  jsx 조건분기
 *  A || B returns the value A if A can be coerced into true; otherwise, it returns B.
 *  A || B 에서 true인 것을 출력한다
 *  { 조건 || (조건이 거짓인 경우 출력할 내용)}
 * 
 *  조건이 참인경우 표시되는 내용 없음.
 */


const If3 = () => {
    const articleList = undefined;
    /**
     * undefined, null, 0, false, '' -> 랜더링 x
     */
    return (
        <div>
            {articleList || (<p>조회된 게시글이 없습니다.</p>)}
        </div>
    );
};

export default If3;