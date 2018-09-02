import React from 'react';
import { render } from 'react-dom';
import { Provider as AppProvider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import BookList from './containers/book-list';
import BookDetail from './containers/book-detail';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const appRoot = document.querySelector('#root');

const App = () => (
  <div className="grid-x grid-margin-x">
    <BookList />
    <BookDetail />
  </div>
);

render(
  <AppProvider store={createStoreWithMiddleware(reducers)}>
    <App />
  </AppProvider>, 
  appRoot,
);
