import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers/index';
import DevTools from '../containers/DevTools';
import { getAllProducts } from '../actions/index';

export default function configureStore() {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk, logger()),
      DevTools.instrument()
    )
  );

  store.dispatch((dispatch) => {
    dispatch({type: 'FETCHING_PRODUCTS'});
    getAllProducts(dispatch);
    //dispatch({type: 'BAR'});

  });

  return store;
}
