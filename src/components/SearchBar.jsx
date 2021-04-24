import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  text(searchText, onSearchTextChange) {
    return (
      <label data-testid="text-input-label" htmlFor="text">
        <p>Inclui o texto:</p>
        <input
          data-testid="text-input"
          name="searchText"
          value={ searchText }
          onChange={ onSearchTextChange }
          type="text"
          id="text"
        />
      </label>
    );
  }

  checkbox(bookmarkedOnly, onBookmarkedChange) {
    return (
      <label data-testid="checkbox-input-label" htmlFor="checkbox">
        <p>Mostrar somente favoritos:</p>
        <input
          type="checkbox"
          id="checkbox"
          name="bookmarkedOnly"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
          data-testid="checkbox-input"
        />
      </label>
    );
  }

  genre(selectedGenre, onSelectedGenreChange) {
    return (
      <label data-testid="select-input-label" htmlFor="genre">
        <p>Filtrar por gênero</p>
        <select
          id="genre"
          value={ selectedGenre }
          name="selectedGenre"
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
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        {this.text(searchText, onSearchTextChange)}
        {this.checkbox(bookmarkedOnly, onBookmarkedChange)}
        {this.genre(selectedGenre, onSelectedGenreChange)}
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
