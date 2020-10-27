import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';// 전체 App을 리덕스에 구독시키기 위해
import {composeWithDevTools} from 'redux-devtools-extension'; // 크롬 개발자 도구
// import Logger from './middlewares/Logger';
import Logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers'; // 파일이름을 지정하지 않으면 index.js를 먼저 참조.
// const store = createStore(rootReducer);
// 크롬 개발자 도구
// const store = createStore(rootReducer,composeWithDevTools());
// const store = createStore(rootReducer,applyMiddleware(Logger));
const store = createStore(
                rootReducer,
                composeWithDevTools(applyMiddleware(Logger,ReduxThunk))
              );

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
