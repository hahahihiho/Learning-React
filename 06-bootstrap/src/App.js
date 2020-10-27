import React from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Meta from './component/Meta';

import Top from './component/Top';

import Button from 'react-bootstrap/Button';

import Page1 from './pages/Page1';
import Page2 from './pages/Page2';

function App() {
  return (
    <BrowserRouter>
      <div style={{paddingTop: '50px'}}>
        <Meta />

        <Top/>

        <Switch>
          <Route path="/page1" component={Page1}></Route>
          <Route path="/page2" component={Page2}></Route>
        </Switch>

        {/* bootstrap 사용 */}
        <button className="btn btn-primary">Hello BS3</button>

        {/* get bootstrap from react */}
        <Button variant="success">Success</Button>
      </div>
    </BrowserRouter>
  );
}

export default App;
