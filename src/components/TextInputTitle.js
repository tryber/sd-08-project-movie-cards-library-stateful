import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputTextTitle extends Component {
  render() {
    const { func, title } = this.props;
    return (
      <label htmlFor="textInput" data-testid="title-input-label">
        Título
        <input
          name="title"
          id="textInput"
          type="text"
          data-testid="title-input"
          value={ title }
          onChange={ func }
        />
      </label>
    );
  }
}

InputTextTitle.propTypes = {
  func: PropTypes.func,
  title: PropTypes.string,
}.isRequired;
