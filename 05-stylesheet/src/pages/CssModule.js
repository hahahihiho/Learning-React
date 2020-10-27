import React from 'react';

import myStyles from '../assets/css/myStyles.module.css'

const CssModule = () => {
    return (
        <div>
            {/* class 이름을 build 할때마다 바꿈 */}
            <div className={myStyles.myCssBox} />

            {/* :global 로 들어가있으면 그냥 불러올 수 있다. */}
            <div className="myBorderBox"/>

            {/* 다중 class 적용(1) 역따옴표 */}
            <div className={`${myStyles.size} ${myStyles.bg}`}/>
            {/* 다중 class 적용(2) list by join */}
            <div className={[myStyles.size,myStyles.bg].join(' ')} />

        </div>
    );
};

export default CssModule;