import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  ImputSearchText(searchText, onSearchTextChange) {
    return (
      <label htmlFor="text-input" data-testid="text-input-label">
        Inclui o texto
        <input
          value={ searchText }
          onChange={ onSearchTextChange }
          data-testid="text-input"
        />
      </label>
    );
  }

  ImputFavoriteCheck(bookmarkedOnly, onBookmarkedChange) {
    return (
      <label htmlFor="checkbox-input" data-testid="checkbox-input-label">
        <input
          type="checkbox"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
          data-testid="checkbox-input"
        />
        Mostrar somente favoritos
      </label>
    );
  }

  ImputSelectOption(selectedGenre, onSelectedGenreChange) {
    return (
      <label htmlFor="text-input" data-testid="select-input-label">
        Filtrar por gênero
        <select
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
    const { searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <section>
        <form action="" data-testid="search-bar-form" className="form-text">
          {this.ImputSearchText(searchText, onSearchTextChange)}
          {this.ImputFavoriteCheck(bookmarkedOnly, onBookmarkedChange)}
          {this.ImputSelectOption(selectedGenre, onSelectedGenreChange)}
        </form>
      </section>);
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
