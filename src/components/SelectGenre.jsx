import React from 'react';
import PropTypes from 'prop-types';

class SelectGenre extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="select-input-label" htmlFor="selectGenre">
        Filtrar por gênero
        <select
          data-testid="select-input"
          value={ value }
          onChange={ onChange }
          id="selectGenre"
        >
          <option value="" data-testid="select-option">Todos</option>
          <option value="action" data-testid="select-option">Ação</option>
          <option value="comedy" data-testid="select-option">Comédia</option>
          <option value="thriller" data-testid="select-option">Suspense</option>
        </select>
      </label>
    );
  }
}

SelectGenre.propTypes = {
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
}.isRequired;

export default SelectGenre;
