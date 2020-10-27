// ./ 나 ../ 없이 쓰면 node modules 에서 package 검색
// 모든 js파일의 최상단에 필수 명시
import React from "react";

import Hello from "./MyComponent1";
import World from "./MyComponent2";
// return JSX문법 (JS + XML) *HTML이 아니다
// function App() {   // ES5 스타일 함수 정의
const App = () => {   // ES6 화살표 함수
  return(
    <div>
      <h1>Hello React</h1>
      {/* Hello Component1 출력 */}
      <Hello/>
      <Hello></Hello>
      <World/>
    </div>
  );
}

export default App;
