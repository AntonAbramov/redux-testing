import React, {Component, PropTypes } from 'react';

class Select extends Component {

  constructor(props) {
    super(props);
    //this.changeHandler.bind(this);
  }

  changeHandler() {
    let newValue = this.refs.quantitySelect.value;

    this.props.onChangeHandler(this.props.index, newValue);
  }

  render() {
    const data = this.props.data;
    console.log('this.props.data.quantity', this.props.data.quantity);
    const options = data.data.map(function (item, idx) {
      return (
        <option key={idx} value={item.value}>{item.name}</option>
      );
    });

    return (
      <div className="select">
        <select
          onChange={this.changeHandler.bind(this)}
          value={this.props.data.quantity}
          ref="quantitySelect"
        >
          {options}
        </select>
      </div>
    );
  }
}

Select.propTypes = {
  selectHandler: PropTypes.func,
  value: PropTypes.number
};

export default Select;