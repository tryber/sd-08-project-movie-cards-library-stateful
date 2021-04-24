// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  inputText(searchText, onSearchTextChange) {
    return (
      <label
        htmlFor="text"
        data-testid="text-input-label"
      >
        Inclui o texto:
        <input
          name="text"
          data-testid="text-input"
          value={ searchText }
          onChange={ onSearchTextChange }
        />
      </label>
    );
  }

  checkBox(bookmarkedOnly, onBookmarkedChange) {
    return (
      <label
        htmlFor="checkbox"
        data-testid="checkbox-input-label"
      >
        Mostrar somente favoritos
        <input
          name="checkbox"
          data-testid="checkbox-input"
          type="checkbox"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
        />
      </label>
    );
  }

  select(selectedGenre, onSelectedGenreChange) {
    return (
      <label htmlFor="select" data-testid="select-input-label">
        Filtrar por gênero
        <select
          name="select"
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
    const { searchText, onSearchTextChange } = this.props;
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        { this.inputText(searchText, onSearchTextChange) }
        { this.checkBox(bookmarkedOnly, onBookmarkedChange) }
        { this.select(selectedGenre, onSelectedGenreChange) }
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
