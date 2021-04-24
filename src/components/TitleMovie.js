import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TitleMovie extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label data-testid="title-input-label" htmlFor="input">
        Título
        <input
          data-testid="title-input"
          type="text"
          name="title"
          id="title"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

TitleMovie.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default TitleMovie;
