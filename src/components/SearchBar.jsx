import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  inputText(searchText, onSearchTextChange) {
    return (
      <label htmlFor="searchText" data-testid="text-input-label" className="label">
        Inclui o texto:
        <input
          type="text"
          name="searchText"
          id="searchText"
          value={ searchText }
          onChange={ onSearchTextChange }
          data-testid="text-input"
          className="input"
        />
      </label>
    );
  }

  inputCheckBox(bookmarkedOnly, onBookmarkedChange) {
    return (
      <label
        htmlFor="bookmarkedOnly"
        data-testid="checkbox-input-label"
        className="checkbox-label"
      >
        <input
          type="checkbox"
          name="bookmarkedOnly"
          id="bookmarkedOnly"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
          data-testid="checkbox-input"
          className="checkbox-input"
        />
        Mostrar somente favoritos
      </label>
    );
  }

  selectGenre(selectedGenre, onSelectedGenreChange) {
    return (
      <label htmlFor="selectedGenre" data-testid="select-input-label" className="label">
        Filtrar por gênero
        <select
          name="selectedGenre"
          id="selectedGenre"
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
          data-testid="select-input"
          className="input"
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
      <form data-testid="search-bar-form" className="form">
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
