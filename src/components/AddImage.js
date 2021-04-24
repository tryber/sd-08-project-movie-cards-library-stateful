import React from 'react';
import PropTypes from 'prop-types';

class AddImage extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          id="image-input"
          name="imagePath"
          type="text"
          value={ value }
          data-testid="image-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

AddImage.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

AddImage.defaultProps = {
  value: '',
};

export default AddImage;
