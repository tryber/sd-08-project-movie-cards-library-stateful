import React from 'react';
import PropTypes from 'prop-types';

class InputStoryline extends React.Component {
  render() {
    const { storyline, handleChange } = this.props;
    return (
      <label
        data-testid="storyline-input-label"
        htmlFor="storyline-input"
      >
        Sinopse
        <textarea
          cols="30"
          data-testid="storyline-input"
          id="storyline-input"
          name="storyline"
          onChange={ handleChange }
          rows="10"
          value={ storyline }
        />
      </label>
    );
  }
}

InputStoryline.propTypes = {
  storyline: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputStoryline;
