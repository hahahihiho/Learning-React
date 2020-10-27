/**
 * index가 되는 파일
 * logger 와 ReduxThunk(async통신)를 Redux에 middleware에 붙인다
 * Provider로 모든 component에 store를 할당해주고
 * SPA에서 route사용을 위해 BrouseRouter를 붙인다.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {BrowserRouter} from 'react-router-dom'

import "./assets/css/bootstrap.min.css"

import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createLogger} from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers'

const logger = createLogger();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger,ReduxThunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
