import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { Provider as AppProvider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import reducers from './reducers';
import SearchBar from './containers/search-bar';
import WeatherList from './containers/weather-list';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const appRoot = document.querySelector('#root');

const App = () => (
  <Fragment>
    <h1 className="text-center">Weather App</h1>
    <SearchBar />
    <WeatherList />
  </Fragment>
);

render(
  <AppProvider store={createStoreWithMiddleware(reducers)}>
    <App />
  </AppProvider>, 
  appRoot,
);
