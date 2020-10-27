import React from 'react';
import './App.css';

import { Switch, Link, Route } from 'react-router-dom';

import Expr from './pages/Expr'
import If1 from './pages/If1';
import If2 from './pages/If2';
import If3 from './pages/If3';
import If4 from './pages/If4';
import If5 from './pages/If5';

import Loop1 from './pages/Loop1'
import Loop2 from './pages/Loop2'
import Loop3 from './pages/Loop3'

function App() {
  return (
    <div>
      <div>
        <h1>Link list</h1>
        <Link to="/">[MAIN]</Link>
        <Link to="/expr">[Expr]</Link>
        <Link to="/if1">[If1]</Link>
        <Link to="/if2">[If2]</Link>
        <Link to="/if3">[If3]</Link>
        <Link to="/if4">[If4]</Link>
        <Link to="/if5">[If5]</Link>
        <Link to="/loop1">[Loop1]</Link>
        <Link to="/loop2">[Loop2]</Link>
        <Link to="/loop3">[Loop3]</Link>
      </div>
      <hr />
      <Switch>
        <Route path="/expr" component={Expr}></Route>
        <Route path="/if1" component={If1}></Route>
        <Route path="/if2" component={If2}></Route>
        <Route path="/if3" component={If3}></Route>
        <Route path="/if4" component={If4}></Route>
        <Route path="/if5" component={If5}></Route>
        <Route path="/loop1" component={Loop1}></Route>
        <Route path="/loop2" component={Loop2}></Route>
        <Route path="/loop3" component={Loop3}></Route>
      </Switch>
    </div>
  );
}

export default App;
