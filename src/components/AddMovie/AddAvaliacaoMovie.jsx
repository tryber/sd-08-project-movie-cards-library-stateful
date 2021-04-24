import React from 'react';
import PropTypes from 'prop-types';

class AddAvaliacaoMovie extends React.Component {
  render() {
    const {
      value,
      handleChange,
    } = this.props;
    return (
      <label htmlFor="input-number" data-testid="rating-input-label">
        Avaliação
        <input
          data-testid="rating-input"
          type="number"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

AddAvaliacaoMovie.propTypes = {
  value: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default AddAvaliacaoMovie;
