import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  searchInput(searchText, onSearchTextChange) {
    return (
      <label data-testid="text-input-label" htmlFor="searchText">
        Inclui o texto
        <input
          name="searchText"
          type="text"
          data-testid="text-input"
          value={ searchText }
          onChange={ onSearchTextChange }
        />
      </label>
    );
  }

  bookMarkInput(bookmarkedOnly, onBookmarkedChange) {
    return (
      <label data-testid="checkbox-input-label" htmlFor="bookmarked">
        Mostrar somente favoritos
        <input
          name="bookmarked"
          data-testid="checkbox-input"
          type="checkbox"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
        />
      </label>
    );
  }

  selectInput(selectedGenre, onSelectedGenreChange) {
    return (
      <label data-testid="select-input-label" htmlFor="selectedGenre">
        Filtrar por gênero
        <select
          data-testid="select-input"
          name="selectedGenre"
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
          {this.searchInput(searchText, onSearchTextChange)}
          {this.bookMarkInput(bookmarkedOnly, onBookmarkedChange)}
          {this.selectInput(selectedGenre, onSelectedGenreChange)}
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
