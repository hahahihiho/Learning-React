import React from 'react';

// Link (Css 적용 x) NavLink (Css 적용 o)
import { Route, NavLink, Switch } from 'react-router-dom'

import InlineCss from "./pages/InlineCss";
import CssClass from "./pages/CssClass";
import CssModule from "./pages/CssModule";
import Scss from "./pages/Scss";
import ScssModule from "./pages/ScssModule";
import StyledComponent from "./pages/StyledComponent";
/**
 * inline-css
 * ex) <div style="..."/>
 * 
 * style 태그사용
 * 
 * 외부 파일 참조
 * <link ... /> 
 * 
 * */

function App() {
  //  활성링크에 적용할 InlineCSS 정의
  // CSS는 JS 속성으로 기술 (document.getElementbyId("...").style.???)
  // --> ex) ??? = textDecoration
  // 전체 구조는 JSON
  const myStyle = {
    fontWeight: 'bold',
    color: '#b82514',
    textDecoration: 'none'
  };
  return (
    <div>
      <h1>CSS 다뤄보기</h1>

      {/* Link 구성 */}
      <NavLink activeStyle={myStyle} to="/inline_css">[ InlineCss ]</NavLink>
      <NavLink activeStyle={myStyle} to="/css_class">[ CssClass ]</NavLink>
      <NavLink activeStyle={myStyle} to="/css_module">[ CssModule ]</NavLink>
      <NavLink activeStyle={myStyle} to="/scss">[ Scss ]</NavLink>
      <NavLink activeStyle={myStyle} to="/scss_module">[ ScssModule ]</NavLink>
      <NavLink activeStyle={myStyle} to="/styled_component">[ StyledComponent ]</NavLink>

      <Switch>
        <Route path="/inline_css" component={InlineCss}></Route>
        <Route path="/css_class" component={CssClass}></Route>
        <Route path="/css_module" component={CssModule}></Route>
        <Route path="/scss" component={Scss}></Route>
        <Route path="/scss_module" component={ScssModule}></Route>
        <Route path="/styled_component" component={StyledComponent}></Route>
      </Switch>
    </div>

  );
}

export default App;
