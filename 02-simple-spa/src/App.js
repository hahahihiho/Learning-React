import React from 'react';
import { Switch, Link, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Main from './pages/Main';
import DepartmentGet from './pages/DepartmentGet';
// import DepartmentPath from './pages/DepartmentPath';

import Error404 from './pages/Error404';
import DepartmentPath from './pages/DepartmentPath';

function App() {
  return (
    <div>
      <h1>Hello world</h1>
      <Link to="/">[MAIN]</Link>
      <Link to="/home">[Home]</Link>
      <Link to="/about">[About]</Link>
      <Link to="/about2">[About2]</Link>
      <Link to="/main">[Main(SubRoute)]</Link>
      <Link to="/department_get/?deptno=101&msg=computer">[Computer학부]</Link>
      <Link to="/department_get/?deptno=102&msg=electric">[전기학부]</Link>
      <Link to="/department_path/101/computer">[Computer_path]</Link>
      <Link to="/department_path/102/electornics">[전기_path]</Link>
      <hr />


      <Switch>
        {/* 딱 그 path에만 표시 exact={true} or exact 넣어주면 자동으로 true*/}
        {/* exact 가 없으면 모든 하위 path에 표시 */}
        <Route path="/" exact={true}>
          <h1>This is main page</h1>
        </Route>
        <Route path="/home" component={Home} />
        {/* list 로 묶어서 두가지 page모두 같은 링크로 이동 */}
        <Route path={["/about","/about2"]} component={About}></Route>
        <Route path="/main" component={Main}></Route>
        <Route path="/department_get" component={DepartmentGet}></Route>
        {/* path parameter 는 URL 형식에 변수의 위치와 이름을 정해줌 */}
        <Route path="/department_path/:deptno/:msg" component={DepartmentPath}/>
        {/* 지정되지 않은 page가 향하는곳 */}
        <Route component={Error404}></Route>
      </Switch>
    </div>
  );
}

export default App;
