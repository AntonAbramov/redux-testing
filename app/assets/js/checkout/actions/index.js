import Axios from 'axios';

export function getAllProducts(dispatch) {
  Axios.get('/cart')
    .then( (response) => {
      dispatch({type: 'RECEIVE_PRODUCTS', payload: response.data});
    })
    .catch((err) => {
      dispatch({type: 'FETCHING_PRODUCTS_ERROR', payload: err});
    });
}

function updateSelect(index, quantity) {
  return {
    type: 'UPDATE_QUANTITY',
    index: index,
    payload:quantity
  };
}

export function updateQntyAction (index, quantity) {
  return ( dispatch ) => {
    dispatch(updateSelect(index, quantity));
  };
}
