import React from "react";
import styled from 'styled-components';
import {Route,NavLink,Switch,BrowserRouter} from "react-router-dom";


import NoReduxCounter from './pages/NoReduxCounter';
import UseReduxCounter from './pages/UseReduxCounter';
import UseReduxHookCounter from './pages/UseReduxHookCounter';

const MenuLink =styled(NavLink)`
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
    <div>
      <h1>React Redux Counter</h1>
      <BrowserRouter>
        <MenuLink to="/no_redux_counter">[NoReduxCounter]</MenuLink>
        <MenuLink to="/use_redux_counter">[UseReduxCounter]</MenuLink>
        <MenuLink to="/use_redux_hook_counter">[UseReduxHookCounter]</MenuLink>
        <Switch>
          <Route path ="/no_redux_counter" component = {NoReduxCounter}/>
          <Route path ="/use_redux_counter" component = {UseReduxCounter}/>
          <Route path ="/use_redux_hook_counter" component = {UseReduxHookCounter}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
