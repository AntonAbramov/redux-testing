import React, {Component, PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { updateQntyAction } from '../actions/index';
import { connect } from 'react-redux';
import Cart from '../components/Cart';
import {getAllProducts} from '../reducers/products';

class CartContainer extends Component {
  onChangeHandler(event) {

    this.props.updateQntyAction(0, event.target.value);
  }
  render() {
    const {products} = this.props;
    var selects;
    if (this.props.products[0]) {
      var options = this.props.products[0].select.map( (item, idx) => {
        return (<option key={idx} value={item.value}>{item.name}</option>)
      });

      selects = <select
        value={this.props.products[0].selected}
        onChange={this.onChangeHandler.bind(this)}
      >
        {options}
      </select>;
    }
    console.log(this.props);
    return (
        <div className="cart-page">
          <h2 className="text-center">Cart Page</h2>
          {selects}
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
  {updateQntyAction}
)(CartContainer);

