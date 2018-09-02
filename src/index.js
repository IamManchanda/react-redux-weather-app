import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as AppProvider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <AppProvider store={createStoreWithMiddleware(reducers)}>
    <App />
  </AppProvider>, 
  document.querySelector('#kohli'),
);
