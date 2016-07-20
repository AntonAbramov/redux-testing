import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configStore';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
//import DevTools from './containers/DevTools';
import routes from './routes';

const store = configureStore();

render(
  <Provider store={store}>
    <div>
      <Router history={hashHistory} routes={routes} />
    </div>
  </Provider>,
  document.getElementById('root')
);