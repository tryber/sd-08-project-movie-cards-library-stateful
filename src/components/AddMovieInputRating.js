import React from 'react';
import PropTypes from 'prop-types';

class AddMovieInputRating extends React.Component {
  render() {
    const { onChangeForm, rating } = this.props;
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          id="rating-input"
          data-testid="rating-input"
          onChange={ onChangeForm }
          value={ rating }
        />
      </label>
    );
  }
}

AddMovieInputRating.propTypes = {
  rating: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  onChangeForm: PropTypes.func,
};

AddMovieInputRating.defaultProps = {
  rating: 0,
  onChangeForm: () => {
    console.log('problema ao passar onChangeForm');
  },
};

export default AddMovieInputRating;
