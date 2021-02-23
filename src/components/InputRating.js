import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputRating extends Component {
  render() {
    const { func, rating } = this.props;
    return (
      <label
        data-testid="rating-input-label"
        htmlFor="inputRating"
      >
        Avaliação
        <input
          type="number"
          id="inputRating"
          value={ rating }
          name="rating"
          data-testid="rating-input"
          onChange={ func }
        />
      </label>
    );
  }
}

InputRating.propTypes = {
  func: PropTypes.func.isRequired,
  rating: PropTypes.string.isRequired,
};
