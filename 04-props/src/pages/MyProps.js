import React from 'react';

import MyPropsSub from '../component/MyPropsSub';

const MyProps = () => {
    return (
        <div>
            <MyPropsSub />
            <MyPropsSub name='현명' age='27'></MyPropsSub>
            <MyPropsSub name='연지' age='28'></MyPropsSub>
        </div>
    );
};

export default MyProps;