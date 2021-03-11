import React from 'react';
import Proptypes from 'prop-types';

class TextAreaAddMovie extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline-textarea">
        Sinopse
        <textarea
          data-testid="storyline-input"
          id="storyline-textarea"
          name="storyline"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

TextAreaAddMovie.propTypes = {
  value: Proptypes.string.isRequired,
  handleChange: Proptypes.func.isRequired,
};

export default TextAreaAddMovie;
