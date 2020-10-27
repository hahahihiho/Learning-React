# SPA(Single Page App)
import { BrowserRouter } from 'react-router-dom' -> 

import { Route, Link, Switch } from 'react-router-dom'

## SPA개발의 장점
페이지 이동 없이 JS에 의해 화면이 갱신되므로 실제로 네트워크 통신이 발생하지 않아 실행 속도가 빠르다.

## SPA개발의 단점
page 소스보기를 해도 표시가 안됨
-> 검색결과 연동 x

* JS코드가 비대해 질 수 있다. 코드 스플리팅 기법으로 해결가능(코드 분할 작성)

* 하나의 HTML이므로 SEO에 취약하다 (서버사이드 렌더링으로 해결 가능)

* 서버사이드 랜더링 = React + Node / React + PHP / React + Java(Spring)

# js export
[Hello.js]
const a = 1;
const b = 2;
function hello() { ... }
function world() { ... }
export {a,b,hello};
export default world;
[index.js]
import hello from './hello';
import {a,b,hello} from './hello';