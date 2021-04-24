import React from 'react';
import PropTypes from 'prop-types';

class AddMovieInputRating extends React.Component {
  inputRating(rating, handleChange) {
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          data-testid="rating-input"
          id="rating-input"
          onChange={ handleChange }
          value={ rating }
          min="0"
          max="5"
          step="any"
        />
      </label>
    );
  }

  render() {
    const { rating, handleChange } = this.props;
    const { inputRating } = this;
    return (
      <fieldset>
        {inputRating(rating, handleChange)}
      </fieldset>
    );
  }
}

AddMovieInputRating.propTypes = {
  rating: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default AddMovieInputRating;
