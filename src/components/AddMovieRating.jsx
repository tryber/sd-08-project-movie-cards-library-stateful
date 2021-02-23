import React from 'react';
import PropTypes from 'prop-types';

class AddMovieRating extends React.Component {
  render() {
    const { changeState, rating } = this.props;
    return (
      <label htmlFor="addmovierating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          data-testid="rating-input"
          id="addmovierating"
          value={ rating }
          onChange={ (event) => {
            changeState({ rating: Number(event.target.value) });
          } }
        />
      </label>
    );
  }
}

export default AddMovieRating;

AddMovieRating.propTypes = {
  changeState: PropTypes.func.isRequired,
  rating: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
};
