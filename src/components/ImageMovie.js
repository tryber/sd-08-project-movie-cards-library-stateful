import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImageMovie extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="input">
        Imagem
        <input
          data-testid="image-input"
          type="text"
          name="imagePath"
          id="imagePath"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

ImageMovie.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default ImageMovie;
