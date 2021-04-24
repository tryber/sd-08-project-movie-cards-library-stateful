// implement SearchBar component here

import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  IputText(searchText, onSearchTextChange) {
    return (
      <div>
        <label htmlFor="text-input" data-testid="text-input-label">
          Inclui o texto
          <input
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"

          />
        </label>
      </div>
    );
  }

  CheckboxInput(bookmarkedOnly, onBookmarkedChange) {
    return (
      <div>
        <label htmlFor="checkbox-input" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
          />
          {' '}
        </label>
      </div>
    );
  }

  SelectInput(selectedGenre, onSelectedGenreChange) {
    return (
      <div>
        <label htmlFor="select-input" data-testid="select-input-label">
          Filtrar por gênero
          <select
            value={ selectedGenre }
            data-testid="select-input"
            onChange={ onSelectedGenreChange }
          >
            <option value="" data-testid="select-option">Todos</option>
            <option value="action" data-testid="select-option">Ação</option>
            <option value="comedy" data-testid="select-option">Comédia</option>
            <option value="thriller" data-testid="select-option">Suspense</option>
          </select>
        </label>
      </div>
    );
  }

  render() {
    const { searchText, onSearchTextChange,
      onBookmarkedChange, selectedGenre,
      onSelectedGenreChange, bookmarkedOnly } = this.props;
    return (
      <main>
        <form data-testid="search-bar-form">
          {this.IputText(searchText, onSearchTextChange)}
          {this.CheckboxInput(bookmarkedOnly, onBookmarkedChange)}
          {this.SelectInput(selectedGenre, onSelectedGenreChange)}
        </form>
      </main>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
