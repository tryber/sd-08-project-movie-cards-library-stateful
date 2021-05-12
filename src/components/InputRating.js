import React from 'react';
import PropTypes from 'prop-types';

class InputRating extends React.Component {
  render() {
    const { rating, handleChange } = this.props;
    return (
      <label
        data-testid="rating-input-label"
        htmlFor="rating-input"
      >
        Avaliação
        <input
          data-testid="rating-input"
          id="rating-input"
          name="rating"
          onChange={ handleChange }
          type="number"
          value={ rating }
        />
      </label>
    );
  }
}

InputRating.propTypes = {
  rating: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputRating;
