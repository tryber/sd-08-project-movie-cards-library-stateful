import React from 'react';
import PropTypes from 'prop-types';

class AddMovieTextInputImage extends React.Component {
  render() {
    const { imagePath, handleChange } = this.props;
    return (
      <fieldset>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            name="imagePath"
            data-testid="image-input"
            id="image-input"
            value={ imagePath }
            onChange={ handleChange }
          />
        </label>
      </fieldset>
    );
  }
}

AddMovieTextInputImage.propTypes = {
  imagePath: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default AddMovieTextInputImage;
