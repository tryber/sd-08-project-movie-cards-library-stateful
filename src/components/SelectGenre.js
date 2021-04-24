import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectGenre extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="select-input-label" htmlFor="text-input-label">
        Filtrar por gênero
        <select
          data-testid="select-input"
          value={ value }
          onChange={ onChange }
          name="selectedGenre"
        >
          <option data-testid="select-option" value="">Todos</option>
          <option data-testid="select-option" value="action">Ação</option>
          <option data-testid="select-option" value="comedy">Comédia</option>
          <option data-testid="select-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

SelectGenre.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectGenre;
