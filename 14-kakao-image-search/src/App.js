import React from "react";

import { Switch,Route } from 'react-router-dom';

import Meta from './components/Meta';
import ImageSearchPage from './pages/ImageSearchPage';

const App = () => {  
  return(
    <div className='container'>
      <Meta />
      <Switch>
        {/* :변수이름? 에서 ?는 변수가 없어도 됨을 의미 */}
        <Route path="/:query?" component={ImageSearchPage} />
      </Switch>
    </div>
  );
}

export default App;
