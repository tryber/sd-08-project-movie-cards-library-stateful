import React from 'react';
import PropTypes from 'prop-types';

class ImageAddMovie extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="image">
        Imagem
        <input
          data-testid="image-input"
          id="image"
          name="imagePath"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

ImageAddMovie.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default ImageAddMovie;
