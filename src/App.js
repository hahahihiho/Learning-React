import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

// import App1 from '../01-hello-react/src/App'
// import App2 from '../02-simple-spa/src/App'

function App() {
  return (
  <Router>
    <div>
      <Link to='/'><h1>Integrated page</h1></Link>
      <div>
        <Link to="/app1">app1</Link>
        <Link to="/app2">app2</Link>
      </div>
      {/* <Route path='/app1' component={App1}/>
      <Route path='/app2' component={App2}/> */}
    </div>
  </Router>
  );
}

export default App;
