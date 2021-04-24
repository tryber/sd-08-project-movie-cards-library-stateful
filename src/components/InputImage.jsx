import React from 'react';
import PropTypes from 'prop-types';

class InputImage extends React.Component {
  render() {
    const { image, func } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="imagePath">
        Imagem
        <input
          type="text"
          name="imagePath"
          data-testid="image-input"
          value={ image }
          onChange={ func }
        />
      </label>
    );
  }
}

InputImage.propTypes = {
  image: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};

export default InputImage;
