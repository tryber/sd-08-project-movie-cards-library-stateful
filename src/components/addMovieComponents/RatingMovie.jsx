import React from 'react';
import propTypes from 'prop-types';

class RatingMovie extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="ratingMovie" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          id="ratingMovie"
          data-testid="rating-input"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

export default RatingMovie;

RatingMovie.propTypes = {
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};
