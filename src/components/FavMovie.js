import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FavMovie extends Component {
  render() {
    const { checked, onChange } = this.props;
    return (
      <label data-testid="checkbox-input-label" htmlFor="favMovie">
        Mostrar somente favoritos
        <input
          id="favMovie"
          type="checkbox"
          checked={ checked }
          onChange={ onChange }
          data-testid="checkbox-input"
        />
      </label>
    );
  }
}

FavMovie.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
}.isRequired;
