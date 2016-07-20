import React, {Component, PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { updateQntyAction } from '../actions/index';
import { connect } from 'react-redux';
import Cart from '../components/Cart';
import {getAllProducts} from '../reducers/products';

class CartContainer extends Component {
  render() {
    console.log('this.props.products', this.props.products);
    return (
        <div className="cart-page">
          <h2 className="text-center">Cart Page</h2>
          <Cart
            onQntyChange={this.props.updateQntyAction}
            products={this.props.products} />
        </div>
    );
  }
}

CartContainer.propTypes = {
  products: PropTypes.object,
  updateQntyAction: PropTypes.func
}

function mapStateToProps(state) {
  return {
    products: state.products
  };
}

/*function mapDispatchToProps(dispatch) {
  return bindActionCreators(updateQntyAction, dispatch)
}*/

export default connect(
  mapStateToProps,
  {updateQntyAction}
)(CartContainer);

