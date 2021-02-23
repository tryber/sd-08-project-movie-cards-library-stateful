import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  inputSearch(searchText, onSearchTextChange) {
    return (
      <label data-testid="text-input-label" htmlFor="text">
        Inclui o texto:
        <input
          data-testid="text-input"
          type="text"
          name="text"
          value={ searchText }
          onChange={ onSearchTextChange }
        />
      </label>
    );
  }

  inputBookmarks(bookmarkedOnly, onBookmarkedChange) {
    return (
      <label data-testid="checkbox-input-label" htmlFor="bookmarked">
        Mostrar somente favoritos
        <input
          data-testid="checkbox-input"
          type="checkbox"
          id="bookmarked"
          name="bookmarked"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
        />

      </label>
    );
  }

  selectGenre(selectedGenre, onSelectedGenreChange) {
    return (
      <label data-testid="select-input-label" htmlFor="genres">
        Filtrar por gênero
        <select
          data-testid="select-input"
          name="genres"
          id="genres"
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
        >
          <option data-testid="select-option" value="">Todos</option>
          <option data-testid="select-option" value="action">Ação</option>
          <option data-testid="select-option" value="comedy">Comédia</option>
          <option data-testid="select-option" value="thriller">Suspense</option>
        </select>

      </label>
    );
  }

  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form">
          {this.inputSearch(searchText, onSearchTextChange)}
          {this.inputBookmarks(bookmarkedOnly, onBookmarkedChange)}
          {this.selectGenre(selectedGenre, onSelectedGenreChange)}
        </form>
      </div>
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
