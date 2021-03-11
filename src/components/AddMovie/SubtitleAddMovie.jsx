import React from 'react';
import PropTypes from 'prop-types';

class SubtitleAddMovie extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle">
        Subtítulo
        <input
          data-testid="subtitle-input"
          id="subtitle"
          name="subtitle"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

SubtitleAddMovie.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SubtitleAddMovie;
