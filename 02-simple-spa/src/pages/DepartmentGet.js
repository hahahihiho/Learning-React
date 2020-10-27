import React from 'react';
import qs from 'qs';
import DB from '../data/Department_DB';
/**
 * 
 * 
 * @param {*} props 컴포넌트에 부가되는 부가정보
 */
const Department_DB = DB;

const DepartmentGet = (props) => {
    console.group("DepartmentGet");
    console.debug(props);
    const queryString = props.location.search;
    const query = qs.parse(queryString, {
        ignoreQueryPrefix: true // 제일앞의 ? 제거 
    }); // -> json object로 변환
    console.debug(queryString, typeof(queryString))
    console.debug(query, typeof query)
    console.groupEnd();

    const deptno = parseInt(query.deptno);
    console.debug(deptno)
    let departmentItem = null;
    Department_DB.item.some((item,index) => {
        if(item.deptno === deptno){
            departmentItem = item;
            return true;
        }
        return false;
    })
    if (!departmentItem) {
        return (<h2>존재하지</h2>);
    }

    return (
        <div>
            <h2>{departmentItem.dname}</h2>
            <ul>
                <li>학과번호: {departmentItem.deptno}</li>
                <li>학과위치: {departmentItem.loc}</li>
            </ul>
        </div>
    );
};

export default DepartmentGet;