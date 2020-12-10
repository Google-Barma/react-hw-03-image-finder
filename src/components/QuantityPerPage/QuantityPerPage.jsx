import { Component } from 'react';
import propTypes from 'prop-types';

export default class QuantityPerPage extends Component {
  state = {
    value: 4,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value) {
      this.props.onChange(this.state.value);
    }
  }

  onChangeValue = e => {
    const value = e.target.value;
    this.setState({ value: value });
  };

  render() {
    return (
      <select
        className="QuantitySelect"
        value={this.state.value}
        name="quantity"
        id="quantity"
        onChange={e => this.onChangeValue(e)}
      >
        <option value="4" name="quantity">
          4
        </option>
        <option value="6" name="quantity">
          6
        </option>
        <option value="8" name="quantity">
          8
        </option>
      </select>
    );
  }
}

QuantityPerPage.propTypes = {
  onChange: propTypes.func.isRequired,
};
