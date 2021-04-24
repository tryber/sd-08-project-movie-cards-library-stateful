import React from 'react';
import PropTypes from 'prop-types';

class SelectGenre extends React.Component {
  render() {
    const { value, func } = this.props;
    return (
      <label data-testid="select-input-label" htmlFor="selectedGenre">
        Filtrar por gênero
        <select
          name="selectedGenre"
          value={ value }
          onChange={ func }
          data-testid="select-input"
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
  func: PropTypes.func.isRequired,
};

export default SelectGenre;
