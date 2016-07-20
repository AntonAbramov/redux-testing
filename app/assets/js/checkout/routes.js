import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import Main from './containers/Main';
import Cart from './containers/Cart';
import Address from './containers/Address';
import NotFoundView from './views/NoFoundView';

export default (
    <Route path="/" component={Main}>
      <Route path="cart" component={Cart} />
      <Route path="address" component={Address} />
      <Route path="404" component={NotFoundView} />
      <Redirect from="*" to="404" />
    </Route>
);
