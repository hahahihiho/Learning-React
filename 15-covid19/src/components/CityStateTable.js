import React from 'react';

import style from "../assets/css/style.module.css"

const CityStateTable = ({state}) => {
    return (
        <div className={'table-responsive ' + style.mt30}>
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th rowSpan="2">시도명</th>
                        <th rowSpan="2">전일대비<br/>확진자증감</th>
                        <th colSpan="4">확징자(명)</th>
                    </tr>
                    <tr>
                        <th>확진환자</th>
                        <th>격리중</th>
                        <th>격리해제</th>
                        <th>사망자</th>
                    </tr>
                </thead>
                <tbody>
                    {state && state.map( (item, index) => (
                        <tr key={index}>
                            <th>{item.region}</th>
                            <th>{Number(item.confirmed-item.confirmed_prev).toLocaleString()}명</th>
                            <th>{Number(item.confirmed).toLocaleString()}명</th>
                            <th>{Number(item.active).toLocaleString()}명</th>
                            <th>{Number(item.released).toLocaleString()}명</th>
                            <th>{Number(item.death).toLocaleString()}명</th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CityStateTable;