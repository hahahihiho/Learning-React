import React from 'react';

import { Link, withRouter } from 'react-router-dom';


// props 에 전달되는 location,history 객체는
// js component 가 <Switch><Route .. > </Switch> 에 명시된 경우만 사용할 수 있따.
// 하지만 export시에 withRouter로 감싸면 Route를 거치지 않더라도 객체가 전달된다
const MyNavLink = (props) => {
    // 현재 웹 브라우저에 표시되고 있는 URL이 to 속성에 지정된 값과 일치하는지 여부 체크
    const isActive = (props.location.pathname === props.to);
    let classes = props.className;
    
    if(isActive){
        classes += " " + props.activeClassName;
    }

    return (
        <li className={classes}>
            <Link to={props.to} exact={props.exact}>{props.children}</Link>
        </li>
    );
};

MyNavLink.defaultProps = {
    className: '',
    exact: true,
    to: '#',
    children: ''
}

// withRouter 라고 하면 props.location, props.history 가 함께 저장돼서 옴.
export default withRouter(MyNavLink);