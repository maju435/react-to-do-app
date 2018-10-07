import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import rootReducer from './reducers';

import createSagaMiddleware from 'redux-saga';

import appSaga from './actions/sagas';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__;

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(appSaga)

// const action = type => store.dispatch({type})

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
