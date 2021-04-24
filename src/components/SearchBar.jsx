// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  inputText(searchText, onSearchTextChange) {
    return (
      <label htmlFor="containsText" data-testid="text-input-label">
        Inclui o texto:
        <input
          type="text"
          name="containsText"
          id="containsText"
          value={ searchText }
          onChange={ onSearchTextChange }
          data-testid="text-input"
        />
      </label>
    );
  }

  inputCheckBox(bookmarkedOnly, onBookmarkedChange) {
    return (
      <label htmlFor="bookmarked" data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input
          type="checkbox"
          name="bookmarked"
          id="bookmarked"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
          data-testid="checkbox-input"
        />
      </label>
    );
  }

  selectGenre(selectedGenre, onSelectedGenreChange) {
    return (
      <label htmlFor="genre" data-testid="select-input-label">
        Filtrar por gênero
        <select
          name="genre"
          id="genre"
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
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
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange } = this.props;

    return (
      <form data-testid="search-bar-form">
        {this.inputText(searchText, onSearchTextChange)}
        {this.inputCheckBox(bookmarkedOnly, onBookmarkedChange)}
        {this.selectGenre(selectedGenre, onSelectedGenreChange)}
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
