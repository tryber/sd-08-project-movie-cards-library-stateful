import React from 'react';
import PropTypes from 'prop-types';

class AddMovieInputTitle extends React.Component {
  render() {
    const { onChangeForm, title } = this.props;
    return (
      <label htmlFor="title-input-label" data-testid="title-input-label">
        Título
        <input
          type="text"
          name="title"
          id="title-input"
          placeholder="Título"
          data-testid="title-input"
          onChange={ onChangeForm }
          value={ title }
        />
      </label>
    );
  }
}

AddMovieInputTitle.propTypes = {
  onChangeForm: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default AddMovieInputTitle;
