import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TextInputSubtitle extends Component {
  render() {
    const { func, subtitle } = this.props;
    return (
      <label data-testid="subtitle-input-label" htmlFor="textSubtitle">
        Subtítulo
        <input
          id="textSubtitle"
          name="subtitle"
          value={ subtitle }
          data-testid="subtitle-input"
          onChange={ func }
        />
      </label>
    );
  }
}

TextInputSubtitle.propTypes = {
  func: PropTypes.func,
  subtitle: PropTypes.string,
}.isRequired;
