import React, { Component, PropTypes } from 'react';
import Product from './Product';
import { Link } from 'react-router';

class Cart extends Component {
  render() {
    const products = this.props.products.products;
    const hasProducts = (products && products.length > 0);
    const productItems = !hasProducts ?
      <tr>
        <td>Please add some products to cart.</td>
      </tr> :
      products.map( (product, index) =>
        <Product
          data={product}
          onQntyChange={this.props.onQntyChange}
          key={index}
          index={index}
        />
      );

    return (
      <div className="col-xs-12 checkout-cart-index ">
        <div className="cart__action cf">
          <div className="row">
            <div className="col-xs-4">
              <Link className="btn btn-lg btn-text btn-cart--back" to="/" title="Back">
                <i className="icon icon-left-open-big show-tablet-inline"></i>
                <strong>Back <span className="show-tablet-inline">to shop</span></strong>
              </Link>
            </div>

            <div className="col-xs-8">
              <Link to="/address"
                    className="btn btn-primary btn-lg js-one-page-checkout btn-block btn-go-to-checkout">
                <strong>
                  Go to checkout <i className="icon icon-right-open-big show-tablet-inline-block"></i>
                </strong>
              </Link>

            </div>
          </div>
        </div>
        <table className="cart-table">
          <thead className="cart-table__head">
          <tr>
            <th className="text-left cart-table__item">Article</th>
            <th className="text-left cart-table__options show-tablet-table-cell">Your Options</th>
            <th className="text-left cart-table__qty">Quantity</th>
            <th className="text-right cart-table__price">Item Price</th>
            <th className="text-right cart-table__total">Total Price</th>
          </tr>
          </thead>
          <tbody className="cart-table__body">
          {productItems}
          </tbody>
        </table>
        <button disabled={!hasProducts}>
          Checkout
        </button>
      </div>
    );
  }
};

Cart.propTypes = {
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
};

export default Cart;