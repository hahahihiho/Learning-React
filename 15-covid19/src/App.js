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
        <Route path='/city_state' component={CityStatePage} />
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
