import React from 'react';
import PropTypes from 'prop-types';

class AddSinopseMovie extends React.Component {
  render() {
    const {
      value,
      handleChange,
    } = this.props;
    return (
      <label htmlFor="input-text" data-testid="storyline-input-label">
        Sinopse
        <textarea
          data-testid="storyline-input"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

AddSinopseMovie.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default AddSinopseMovie;
