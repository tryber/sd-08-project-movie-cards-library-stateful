import React from 'react';
import PropTypes from 'prop-types';

class AddMovieInputImagePath extends React.Component {
  render() {
    const { onChangeForm, imagePath } = this.props;
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          name="imagePath"
          id="image-input"
          data-testid="image-input"
          onChange={ onChangeForm }
          value={ imagePath }
        />
      </label>
    );
  }
}

AddMovieInputImagePath.propTypes = {
  imagePath: PropTypes.string.isRequired,
  onChangeForm: PropTypes.func,
};

AddMovieInputImagePath.defaultProps = {
  onChangeForm: () => {
    console.log('problema ao passar onChangeForm');
  },
};

export default AddMovieInputImagePath;
