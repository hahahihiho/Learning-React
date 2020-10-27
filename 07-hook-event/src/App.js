import React from 'react';

import styled from 'styled-components';
import {BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';

import MyState from './pages/MyState';
import DateRange1 from './pages/DateRange1';
import DateRange2 from './pages/DateRange2';
import MyEffect from './pages/MyEffect';
import MyReducer from './pages/MyReducer';
import StateEffectEx from './pages/StateEffectEx';
import MyRef from './pages/MyRef';
import MyCallback from './pages/MyCallback';
import MyMemo from './pages/MyMemo';
import MyCustomHook from './pages/MyCustomHook'

// 상속 + css 넣기
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

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>07-hook-event</h1>
        <MenuLink to='/myState'>MyState</MenuLink>
        <MenuLink to='/daterange'>DateRange1</MenuLink>
        <MenuLink to='/myeffect'>MyEffect</MenuLink>
        <MenuLink to='/state_effect_ex'>StateEffectEx</MenuLink>
        <MenuLink to='/myreducer'>MyReducer</MenuLink>
        <MenuLink to='/daterange2'>DateRange2</MenuLink>
        <MenuLink to='/myref'>MyRef</MenuLink>
        <MenuLink to='/mycallback'>MyCallback</MenuLink>
        <MenuLink to='/mymemo'>MyMemo</MenuLink>
        <MenuLink to='/my_custom_hook'>MyCustomHook</MenuLink>

        <Switch>
          <Route path='/myState' component={MyState}/>
          <Route path='/daterange' component={DateRange1}/>
          <Route path='/myeffect' component={MyEffect}/>
          <Route path='/state_effect_ex' component={StateEffectEx}/>
          <Route path='/myreducer' component={MyReducer}/>
          <Route path='/daterange2' component={DateRange2}/>
          <Route path='/myref' component={MyRef}/>
          <Route path='/mycallback' component={MyCallback}/>
          <Route path='/mymemo' component={MyMemo}/>
          <Route path='/my_custom_hook' component={MyCustomHook}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
