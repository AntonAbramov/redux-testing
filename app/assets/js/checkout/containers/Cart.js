import React, {Component, PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { updateQntyAction } from '../actions/index';
import { connect } from 'react-redux';
import Cart from '../components/Cart';
import {getAllProducts} from '../reducers/products';

class CartContainer extends Component {
  render() {
    const {products} = this.props;
    return (
        <div className="cart-page">
          <h2 className="text-center">Cart Page</h2>
          <Cart
            onQntyChange={this.props.updateQntyAction}
            products={products} />
        </div>
    );
  }
}

CartContainer.propTypes = {
  products: PropTypes.array,
  updateQntyAction: PropTypes.func
}

function mapStateToProps(state) {
  return {
    products: getAllProducts(state)
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(updateQntyAction, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartContainer);

