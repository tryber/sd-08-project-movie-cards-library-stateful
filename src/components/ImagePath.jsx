import React from 'react';
import PropTypes from 'prop-types';

class ImagePath extends React.Component {
  render() {
    const { imagePath, handleChange } = this.props;
    return (
      <label htmlFor="image-path" data-testid="image-input-label">
        Imagem:
        <input
          id="image-path"
          type="text"
          name="imagePath"
          onChange={ handleChange }
          value={ imagePath }
          data-testid="image-input"
        />
      </label>
    );
  }
}

ImagePath.propTypes = {
  imagePath: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default ImagePath;
