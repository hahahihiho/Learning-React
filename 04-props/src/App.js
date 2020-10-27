import React from 'react';

import {Link,Route,Switch} from 'react-router-dom';

import MyProps from './pages/MyProps';
import MyChildren from './pages/MyChildren';
import MyPropTypes from './pages/MyPropTypes';

function App() {
  return (
    <div>
      <Link to='/myprops'>[MyProps]</Link>
      <Link to='/mychildren'>[MyChildren]</Link>
      <Link to='/mypropstype'>[MyPropsTypes]</Link>

      <Switch>
        <Route path='/myprops' component={MyProps}></Route>  
        <Route path='/mychildren' component={MyChildren}></Route>  
        <Route path='/mypropstype' component={MyPropTypes}></Route>
        <Route>no</Route>
      </Switch>      
    </div>
  );
}

export default App;
