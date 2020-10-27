/** App.js
 * 
 * Header(Top) 와 Footer를 고정시키고
 * 그리고 Switch 와 Router를 이용하여 Component를 SPA로 각 링크에 맞게 띄움
 *
 */ 


import React from "react";

import {Switch,Route} from 'react-router-dom';

import Meta from './components/Meta';
import Top from './components/Top';
import KoreaStatePage from './pages/KoreaStatePages';
import CityStatePage from './pages/CityStatePages';

import style from './assets/css/style.module.css'

const App = () => {  
  return(
    <div className={style.containerTop}>
      <Meta />
      <Top />
      <Switch>
        <Route path={["/","/korea_state"]} component={KoreaStatePage} exact={true} />
        <Route path='/sido_state' component={CityStatePage} />
      </Switch>
      <div className={style.footer}>
        <div className="container">
          This is footer
        </div>
      </div>
    </div>
  );
}

export default App;
