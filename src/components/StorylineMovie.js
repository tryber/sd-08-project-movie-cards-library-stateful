import React, { Component } from 'react';
import PropTypes from 'prop-types';

class StorylineMovie extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="input">
        Sinopse
        <textarea
          data-testid="storyline-input"
          type="text"
          name="storyline"
          id="storyline"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

StorylineMovie.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default StorylineMovie;
