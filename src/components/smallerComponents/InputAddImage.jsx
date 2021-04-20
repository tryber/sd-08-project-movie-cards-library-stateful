import React from 'react';
import PropTypes from 'prop-types';

class InputAddImage extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label htmlFor="text" data-testid="image-input-label">
        Imagem
        <input
          name="imagePath"
          type="text"
          id="text"
          data-testid="image-input"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

InputAddImage.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
};

InputAddImage.defaultProps = {
  value: '',
  handleChange: () => {},
};

export default InputAddImage;
