import React from 'react';
import PropTypes from 'prop-types';

class InputImage extends React.Component {
  render() {
    const { imagePath, handleChange } = this.props;
    return (
      <label
        data-testid="image-input-label"
        htmlFor="image-input"
      >
        Imagem
        <input
          data-testid="image-input"
          id="image-input"
          name="imagePath"
          onChange={ handleChange }
          type="text"
          value={ imagePath }
        />
      </label>
    );
  }
}

InputImage.propTypes = {
  imagePath: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputImage;
