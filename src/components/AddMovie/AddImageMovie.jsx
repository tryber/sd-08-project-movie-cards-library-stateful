import React from 'react';
import PropTypes from 'prop-types';

class AddImageMovie extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="image" data-testid="image-input-label">
        Imagem
        <input
          name="imagePath"
          data-testid="image-input"
          type="text"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

AddImageMovie.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default AddImageMovie;
