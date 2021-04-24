import React from 'react';
import PropTypes from 'prop-types';

class AddMovieTextInputSubtitle extends React.Component {
  render() {
    const { subtitle, handleChange } = this.props;
    return (
      <fieldset>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            name="subtitle"
            data-testid="subtitle-input"
            id="subtitle-input"
            value={ subtitle }
            onChange={ handleChange }
          />
        </label>
      </fieldset>
    );
  }
}

AddMovieTextInputSubtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default AddMovieTextInputSubtitle;
