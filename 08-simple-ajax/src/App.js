import React from "react";

import styled from 'styled-components';
import {BrowserRouter,Route,NavLink,Switch } from 'react-router-dom';

import DepartmentAdd from './pages/DepartmentAdd';
import DepartmentList from './pages/DepartmentList';

const MenuLink = styled(NavLink)`
  font-size: 20px;      cursor:pointer;   text-decoration:none;
  padding-bottom: 2px;  color: #222;

  &:hover { color: #ff00ff;}

  &:after {
    content: '|';   display: inline-block;    padding: 0 7px;
    color: #ccc;    font-weight: normal;
  }

  /* 현재 매뉴와 링크가 같은경우(NavLink의 active 기능 호출) */
  &.active{
    font-weight:bold ;     text-decoration: underline;     color: #22b8cf;
    &:hover { color: #3bc9db }
  }
`
const App = () => {  
  return(
    <BrowserRouter>
      <div>
        <nav>
          <MenuLink to='/department_list'>목록</MenuLink>
          <MenuLink to='/department_add'>추가</MenuLink>
        </nav>
        <hr />
        <Switch>
          <Route exact path={["/department_list","/"]} component={DepartmentList} />
          <Route path="/department_add" component={DepartmentAdd} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
