import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  includesText(searchText, onSearchTextChange) {
    return (
      <label htmlFor="includes-text" data-testid="text-input-label">
        Inclui o texto:
        <input
          type="text"
          name="includes-text"
          value={ searchText }
          onChange={ onSearchTextChange }
          data-testid="text-input"
        />
      </label>
    );
  }

  showOnlyFavorites(bookmarkedOnly, onBookmarkedChange) {
    return (
      <label htmlFor="show-only-favorites" data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input
          type="checkbox"
          name="show-only-favorites"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
          data-testid="checkbox-input"
        />
      </label>
    );
  }

  filterByGenre(selectedGenre, onSelectedGenreChange) {
    return (
      <label htmlFor="name-select" data-testid="select-input-label">
        Filtrar por gênero
        <select
          name="name-select"
          id="name-select"
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
          data-testid="select-input"
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
    const { searchText, onSearchTextChange } = this.props;
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form action="" data-testid="search-bar-form">
        { this.includesText(searchText, onSearchTextChange) }
        { this.showOnlyFavorites(bookmarkedOnly, onBookmarkedChange) }
        { this.filterByGenre(selectedGenre, onSelectedGenreChange) }
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
