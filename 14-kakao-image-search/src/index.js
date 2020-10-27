import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter } from 'react-router-dom';

// index.js에서 참조할경우 css 가 전체에 영향
import 'bootstrap/dist/css/bootstrap.min.css'

import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createLogger} from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers'; //지정된 경로가 폴더인경우 index.js를 참조

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
