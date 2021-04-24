import React from 'react';
import Proptypes from 'prop-types';

class Select extends React.Component {
  renderSelect() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <select
        name=""
        data-testid="select-input"
        value={ selectedGenre }
        onChange={ onSelectedGenreChange }
      >
        <option value="" data-testid="select-option">Todos</option>
        <option value="action" data-testid="select-option">Ação</option>
        <option value="comedy" data-testid="select-option">Comédia</option>
        <option value="thriller" data-testid="select-option">Suspense</option>
      </select>
    );
  }

  render() {
    return (
      <label
        htmlFor="select"
        data-testid="select-input-label"
      >
        Filtrar por gênero:
        { this.renderSelect() }
      </label>
    );
  }
}

export default Select;

Select.propTypes = {
  selectedGenre: Proptypes.string.isRequired,
  onSelectedGenreChange: Proptypes.func.isRequired,
};
