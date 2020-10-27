import React from 'react';

import MyPropTypesSub from '../component/MyPropTypesSub';

const MyPropTypes = () => {
    return (
        <div>
            <MyPropTypesSub name='민호' age = {19} hobby = "사진찍기" />
            <MyPropTypesSub name='민호2' age = '스물한살' hobby = "여여엉화" />
            <MyPropTypesSub name='민호3' age = {22}/>
        </div>
    );
};

export default MyPropTypes;