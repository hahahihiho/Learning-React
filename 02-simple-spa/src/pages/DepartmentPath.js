import React from 'react';
import DB from '../data/Department_DB';
// import { Switch, Route } from 'react-router-dom';
// import Sub2 from './Sub2'

const Department_DB = DB;

const DepartmentPath = (props) => {
    console.group('DepartmentPath');
    console.debug(props);
    const urlParams = props.match.params;
    console.debug(urlParams);
    console.groupEnd();
    const item = DB.item.filter(item => item.deptno == urlParams.deptno);
    const content = item[0]
    return (
        <div>
            <ul>
                <li>{content.deptno}</li>
                <li>{content.dname}</li>
                <li>{content.loc}</li>
            </ul>
        </div>
    );
};

export default DepartmentPath;