import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.Component {
  render() {
    const { handleChange, imageValue } = this.props;
    return (
      <label htmlFor="imagePath" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          data-testid="image-input"
          id="imagePath"
          onChange={ handleChange }
          value={ imageValue }
        />
      </label>
    );
  }
}

Image.propTypes = {
  handleChange: PropTypes.func.isRequired,
  imageValue: PropTypes.string.isRequired,
};

export default Image;
