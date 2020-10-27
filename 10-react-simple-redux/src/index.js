import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {createStore, applyMiddleware} from 'redux';
// 전체 App을 리덕스에 구독시키기 위해
import {Provider} from 'react-redux';
// 크롬 개발자 도구
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './modules'; // 파일이름을 지정하지 않으면 index.js를 먼저 참조.
import Logger from './middlewares/Logger';
// const store = createStore(rootReducer);
// 크롬 개발자 도구
// const store = createStore(rootReducer,composeWithDevTools());
// const store = createStore(rootReducer,applyMiddleware(Logger));
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(Logger)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
