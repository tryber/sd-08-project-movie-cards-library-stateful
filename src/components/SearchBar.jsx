import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  inputText(searchText, onSearchTextChange) {
    return (
      <div>
        <label htmlFor="input-text" data-testid="text-input-label">
          Inclui o texto:
          <input
            id="searchText"
            name="searchText"
            data-testid="text-input"
            onChange={ onSearchTextChange }
            value={ searchText }
            type="text"
          />
        </label>
      </div>
    );
  }

  inputCheckBox(bookmarkedOnly, onBookmarkedChange) {
    return (
      <div>
        <label htmlFor="input-checkbox" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            id="checkbox-input"
            name="checkbox-input"
            data-testid="checkbox-input"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            type="checkbox"
          />
        </label>
      </div>
    );
  }

  inputSelect(selectedGenre, onSelectedGenreChange) {
    return (
      <label htmlFor="input-select" data-testid="select-input-label">
        Filtrar por gênero
        <select
          name="select-input"
          id="select-input"
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
    const { searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form">
          <div>
            {this.inputText(searchText, onSearchTextChange)}
          </div>
          <div>
            {this.inputCheckBox(bookmarkedOnly, onBookmarkedChange)}
          </div>
          <div>
            {this.inputSelect(selectedGenre, onSelectedGenreChange)}
          </div>
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
