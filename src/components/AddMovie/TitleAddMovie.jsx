import React from 'react';
import PropTypes from 'prop-types';

class TitleAddMovie extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label data-testid="title-input-label" htmlFor="title">
        Título
        <input
          data-testid="title-input"
          id="title"
          name="title"
          type="text"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

TitleAddMovie.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default TitleAddMovie;
