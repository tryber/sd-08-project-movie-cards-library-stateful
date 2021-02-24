// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  textElement(searchText, onSearchTextChange) {
    return (
      <label data-testid="text-input-label" htmlFor="text-input">
        Inclui o texto:
        <input
          data-testid="text-input"
          type="text"
          onChange={ onSearchTextChange }
          name="login"
          id="login"
          value={ searchText }
        />
      </label>
    );
  }

  checkboxElement(bookmarkedOnly, onBookmarkedChange) {
    return (
      <label data-testid="checkbox-input-label" htmlFor="checkbox-input">
        Mostrar somente favoritos
        <input
          data-testid="checkbox-input"
          name="isGoing"
          type="checkbox"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
        />
      </label>
    );
  }

  selectElement(selectedGenre, onSelectedGenreChange) {
    return (
      <label data-testid="select-input-label" htmlFor="select-input">
        Filtrar por gênero
        <select
          data-testid="select-input"
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
      searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        { this.textElement(searchText, onSearchTextChange) }
        { this.checkboxElement(bookmarkedOnly, onBookmarkedChange) }
        { this.selectElement(selectedGenre, onSelectedGenreChange) }
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
