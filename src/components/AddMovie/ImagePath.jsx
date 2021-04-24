import React from 'react';
import PropTypes from 'prop-types';

class ImagePath extends React.Component {
  render() {
    const { inputUrl, handleChange } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="image-input">
        Imagem
        <input
          name="inputUrl"
          type="text"
          data-testid="image-input"
          id="image-input"
          value={ inputUrl }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

ImagePath.propTypes = {
  inputUrl: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default ImagePath;
