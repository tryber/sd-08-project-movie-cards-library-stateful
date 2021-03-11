import React from 'react';
import PropTypes from 'prop-types';

class RatingAddMovie extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="rating-input">
        Avaliação
        <input
          data-testid="rating-input"
          id="rating-input"
          name="rating"
          type="number"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

RatingAddMovie.propTypes = {
  value: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default RatingAddMovie;
