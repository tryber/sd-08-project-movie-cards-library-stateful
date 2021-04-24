import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RatingMovie extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="input">
        Avaliação
        <input
          data-testid="rating-input"
          type="number"
          name="rating"
          id="rating"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

RatingMovie.propTypes = {
  value: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default RatingMovie;
