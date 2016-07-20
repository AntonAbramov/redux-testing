import * as actionTypes from '../constants/ActionTypes';

const initialState = {
  fetching: false,
  fetched: false,
  products: [],
  erros: null
};

export function Products(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCHING_PRODUCTS: {
      state = {...state, fetching: true};
      break;
    }
    case actionTypes.RECEIVE_PRODUCTS: {
      state = {...state, fetching: false, fatched: true, products: action.payload };
      break;
    }
    case actionTypes.FETCHING_PRODUCTS_ERROR: {
      state = {...state, fetching: false, errors: action.payload};
      break;
    }
    case actionTypes.UPDATE_QUANTITY: {
      Object.assign({}, state, state['products'][action.index]['selectData']['quantity'] =  action.payload);
      break;
    }
    default:
      state = {...state};
  }
  return state;
}

export function getAllProducts(state) {
  return state.products.products;
}