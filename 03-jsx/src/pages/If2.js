import React from 'react';

/** 
 * && 연산자 사용
 * A && B returns the value A if A can be coerced into false; otherwise, it returns B.
 */
const If2 = () => {
    return (
        <div>
            <p>
                {0 && 'number'}
            </p>
            <p>
                {'number' && 1}
            </p>
        </div>
    );
};

export default If2;