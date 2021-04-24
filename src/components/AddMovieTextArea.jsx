import React from 'react';
import PropTypes from 'prop-types';

class AddMovieTextArea extends React.Component {
  render() {
    const { storyline, handleChange } = this.props;
    return (
      <fieldset>
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <textarea
            type="text"
            name="storyline"
            data-testid="storyline-input"
            cols="30"
            rows="10"
            id="storyline-input"
            value={ storyline }
            onChange={ handleChange }
          />
        </label>
      </fieldset>
    );
  }
}

AddMovieTextArea.propTypes = {
  storyline: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default AddMovieTextArea;
