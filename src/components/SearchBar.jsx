import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  inputTextElement(value, callback) {
    return (
      <label htmlFor="inputTextElement" data-testid="text-input-label">
        Inclui o texto
        <input
          value={ value }
          type="text"
          name="searchText"
          id="inputTextElement"
          onChange={ callback }
          data-testid="text-input"
        />
      </label>
    );
  }

  checkboxInput(value, callback) {
    return (
      <label htmlFor="checkboxInput" data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input
          checked={ value }
          type="checkbox"
          name="bookmarkedOnly"
          id="checkboxInput"
          onChange={ callback }
          data-testid="checkbox-input"
        />
      </label>
    );
  }

  selectElement(value, callback) {
    return (
      <label htmlFor="selectElement" data-testid="select-input-label">
        Filtrar por gênero
        <select
          value={ value }
          name="selectedGenre"
          id="selectElement"
          onChange={ callback }
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
        { this.inputTextElement(searchText, onSearchTextChange) }
        { this.checkboxInput(bookmarkedOnly, onBookmarkedChange) }
        { this.selectElement(selectedGenre, onSelectedGenreChange) }
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

SearchBar.defaultProps = {
  searchText: '',
  bookmarkedOnly: false,
  selectedGenre: '',
};

export default SearchBar;
