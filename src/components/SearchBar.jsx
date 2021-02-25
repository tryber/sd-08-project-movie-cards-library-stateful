import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  searchInput(searchText, onSearchTextChange) {
    return (
      <label htmlFor="text-input" data-testid="text-input-label">
        Inclui o texto
        <input
          id="text-input"
          name="searchText"
          data-testid="text-input"
          type="text"
          onChange={ onSearchTextChange }
          value={ searchText }
        />
      </label>
    );
  }

  searchCheckbox(bookmarkedOnly, onBookmarkedChange) {
    return (
      <label htmlFor="checkbox-input" data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input
          id="checkbox-input"
          name="bookmarkedOnly"
          data-testid="checkbox-input"
          type="checkbox"
          onChange={ onBookmarkedChange }
          checked={ bookmarkedOnly }
        />
      </label>
    );
  }

  selectedGenreInput(selectedGenre, onSelectedGenreChange) {
    return (
      <label htmlFor="select-input" data-testid="select-input-label">
        Filtrar por gênero
        <select
          id="select-input"
          name="selectedGenre"
          data-testid="select-input"
          onChange={ onSelectedGenreChange }
          value={ selectedGenre }
        >
          <option value="" data-testid="select-option">Todos</option>
          <option value="action" data-testid="select-option">Ação</option>
          <option value="comedy" data-testid="select-option">Comédia</option>
          <option value="thriller" data-testid="select-option">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    const {
      searchText, onSearchTextChange,
      bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange,
    } = this.props;

    return (
      <form data-testid="search-bar-form">
        { this.searchInput(searchText, onSearchTextChange) }
        { this.searchCheckbox(bookmarkedOnly, onBookmarkedChange) }
        { this.selectedGenreInput(selectedGenre, onSelectedGenreChange) }
      </form>
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
