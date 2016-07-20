import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class MainContainer extends Component {
  render() {
    return (
        <div>
          <h1>Checkout workflow</h1>
          <Link to="/" className="btn btn-primary">Home</Link>
          <Link to="/cart" className="btn btn-primary">go to Cart Page</Link>
          <br/>
          <div>{this.props.children}</div>
        </div>
    );
  }
}

export default MainContainer;