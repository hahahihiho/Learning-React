import React from 'react';

/** scss 파일 참조하기 */
import '../assets/scss/style.scss'

/**
 * SCSS 를 사용하는 컴포넌트
 * 페키지 node-sass필요
 */

const Scss = () => {
    return (
        <div>
            <div className="myScss">
                <div className="myScssBox red"/>
                <div className="myScssBox green"/>
                <div className="myScssBox blue"/>
                <div className="myScssBox orange"/>
                <div className="myScssBox yellow"/>
                <div className="myScssBox pink"/>
            </div>
        </div>
    );
};

export default Scss;