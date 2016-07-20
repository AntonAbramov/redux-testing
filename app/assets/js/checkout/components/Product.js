import React, {Component, PropTypes } from 'react';
import SelectComponent from './select';

class Product extends Component {
  constructor(props) {
    super(props);
  }

  changeHandler(newValue) {
    this.setState({
      value: newValue,
      total: Number(newValue * this.props.price).toFixed(2)
    });
  }

  render() {
    const data = this.props.data;
    return (
      <tr>
        <td className="cart-table__item text-left">
          <a className="cart-table__item-link pull-left product-item--art-print"
             href={data.link}
             title="Gin - Premium Poster">
                    <span className="product-item-box">
                      <span className="product-item__preview item--rotation">
                          <img className="product-item__img lazyloaded"
                               alt={data.alt}
                               src={data.src}/>
                      </span>
                    </span>
          </a>

          <div className="cart-table__item-info">
            <div className="item-info__data">
              <a className="item-info__data-design"
                 href={data.link}>
                {data.productName}
              </a>

              <div className="item-info__data-details">
                <strong className="mb5 inline-block">{data.productType}</strong>
                <span>{data.productAuthor}</span>
              </div>
            </div>
            <a className="item-info__remove"
               href={data.removeLink}>{data.removeText}</a>
          </div>
        </td>
        <td className="item-info__options show-tablet-table-cell">
          <div className="item-info__options-item">
            {data.size}
          </div>
          <p className="cart__shipping-info">
            {data.avaliableText}
          </p>
        </td>
        <td className="cart-table__qty text-left">
          <SelectComponent
            index={this.props.index}
            onChangeHandler={this.props.onQntyChange}
            data={data.selectData}/>

        </td>
        <td className="cart-table__price text-right">
          <span className="price">{Number(data.price).toFixed(2)}</span>
        </td>
        <td className="text-right cart-table__total">
          <span className="price">this.state.total</span>
        </td>
      </tr>
    );
  }
}

Product.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  productName: PropTypes.string,
  alt: PropTypes.string,
  src: PropTypes.string,
  productType: PropTypes.string,
  productAuthor: PropTypes.string,
  removeLink: PropTypes.string,
  removeText: PropTypes.string,
  selectData: PropTypes.object,
  size: PropTypes.string,
  avaliableText: PropTypes.string,
  price: PropTypes.number,
  value: PropTypes.number,
  total: PropTypes.number
}

export default Product;