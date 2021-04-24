import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  inputSearchBar(searchText, onSearchTextChange) {
    return (
      <label htmlFor="searchText" data-testid="text-input-label">
        Inclui o texto:
        <input
          type="text"
          data-testid="text-input"
          value={ searchText }
          onChange={ onSearchTextChange }
          name="searchText"
          id="searchText"
        />
      </label>
    );
  }

  inputCheckBox(bookmarkedOnly, onBookmarkedChange) {
    return (
      <label htmlFor="bookmarkedOnly" data-testid="checkbox-input-label">
        Mostrar somente favoritos:
        <input
          type="checkbox"
          name="bookmarkedOnly"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
          data-testid="checkbox-input"
          id="checkBox"
        />
      </label>
    );
  }

  inputMovieGenre(selectedGenre, onSelectedGenreChange) {
    return (
      <label htmlFor="selectedGenre" data-testid="select-input-label">
        Filtrar por gênero:
        <select
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
          name="selectedGenre"
          id="selectedGenre"
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
        {this.inputSearchBar(searchText, onSearchTextChange)}
        {this.inputCheckBox(bookmarkedOnly, onBookmarkedChange)}
        {this.inputMovieGenre(selectedGenre, onSelectedGenreChange)}
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
}.isRequired;

export default SearchBar;
