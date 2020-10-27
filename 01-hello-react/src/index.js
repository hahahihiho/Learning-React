import React from 'react';
// dom 을 구성하기 위한 기능 참조
import ReactDOM from 'react-dom';
// import './index.css';
// 이 위치의 App.js를 App이라는 이름으로 가져옴
import App from './App';
// debugging을 도와줌
import * as serviceWorker from './serviceWorker';

// rendering
// first pharameter: component
//  -> <React.StrictMode> 선언하고 사용하지 않은 변수들에 경고 메시지( 개발용 )
// second parameter: render to public/index.html
// localhost:3000 public 폴더

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
