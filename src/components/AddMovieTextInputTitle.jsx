import React from 'react';
import PropTypes from 'prop-types';

class AddMovieTextInputTitle extends React.Component {
  render() {
    const { title, handleChange } = this.props;
    return (
      <fieldset>
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            type="text"
            name="title"
            data-testid="title-input"
            id="title-input"
            value={ title }
            onChange={ handleChange }
          />
        </label>
      </fieldset>
    );
  }
}

AddMovieTextInputTitle.propTypes = {
  title: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default AddMovieTextInputTitle;
