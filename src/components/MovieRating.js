import React from 'react';
import PropTypes from 'prop-types';

class MovieRating extends React.Component {
  render() {
    const { handleChange, rate } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          data-testid="rating-input"
          id="rating"
          onChange={ handleChange }
          value={ rate }
        />
      </label>
    );
  }
}

MovieRating.propTypes = {
  handleChange: PropTypes.func.isRequired,
  rate: PropTypes.number.isRequired,
};

export default MovieRating;
