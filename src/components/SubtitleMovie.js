import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SubtitleMovie extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label data-testid="subtitle-input-label" htmlFor="input">
        Subtítulo
        <input
          data-testid="subtitle-input"
          type="text"
          name="subtitle"
          id="subtitle"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

SubtitleMovie.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SubtitleMovie;
