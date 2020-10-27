import React from "react";

import styled from "styled-components";
import { Route, NavLink, Switch } from "react-router-dom";

import MyProps from "./pages/MyProps";
import MyPropTypes from "./pages/MyPropTypes";
import MyChildren from "./pages/MyChildren";
import MyState from "./pages/MyState";
import MyRef from "./pages/MyRef";
import MyLifeCycle from "./pages/MyLifeCycle";
import DepartmentList from "./pages/DepartmentList";
import DepartmentAdd from "./pages/DepartmentAdd";

const MenuLink = styled(NavLink)`
  font-size: 20px;
  cursor: pointer;
  text-decoration: none;
  padding-bottom: 10px;
  color: #222;

  &:hover {
    color: #ff00ff;
  }

  &:after {
    content: "|";
    display: inline-block;
    padding: 0 7px;
    color: #ccc;
    font-weight: normal;
  }

  &.active {
    font-weight: bold;
    text-decoration: underline;
    color: #22b8cf;
    &:hover{
      color: #3bc9db;
    }
  }
`;

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <MenuLink to="/myprops">MyProps</MenuLink>
        <MenuLink to="/myproptypes">MyPropTypes</MenuLink>
        <MenuLink to="/mychildren">MyChildren</MenuLink>
        <MenuLink to="/mystate">MyState</MenuLink>
        <MenuLink to="/myref">MyRef</MenuLink>
        <MenuLink to="/mylifecycle">MyLifeCycle</MenuLink>
        <MenuLink to="/department_list">DepartmentList</MenuLink>
        <MenuLink to="/department_add">DepartmentAdd</MenuLink>
        <hr />

        <Switch>
          <Route path="/myprops" component={MyProps} />
          <Route path="/myproptypes" component={MyPropTypes} />
          <Route path="/mychildren" component={MyChildren} />
          <Route path="/mystate" component={MyState} />
          <Route path="/myref" component={MyRef} />
          <Route path="/mylifecycle" component={MyLifeCycle} />
          <Route path="/department_list" component={DepartmentList} />
          <Route path="/department_add" component={DepartmentAdd} />
        </Switch>
      </div>
    );
  }
}

export default App;
