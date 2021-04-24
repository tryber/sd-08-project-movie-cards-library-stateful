import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputTextArea extends Component {
  render() {
    const { func, storyline } = this.props;
    return (
      <label
        data-testid="storyline-input-label"
        htmlFor="inputTextArea"
      >
        Sinopse
        <textarea
          type="text"
          name="storyline"
          value={ storyline }
          id="inputTextArea"
          data-testid="storyline-input"
          onChange={ func }
        />
      </label>
    );
  }
}

InputTextArea.propTypes = {
  func: PropTypes.func,
  storyline: PropTypes.string,
}.isRequired;
