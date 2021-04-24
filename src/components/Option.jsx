import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Option extends Component {
  render() {
    const { value, valueOfValue } = this.props;

    return (
      <option data-testid="select-option" value={ valueOfValue }>{ value }</option>
    );
  }
}

Option.propTypes = {
  value: PropTypes.string.isRequired,
  valueOfValue: PropTypes.string.isRequired,
};
