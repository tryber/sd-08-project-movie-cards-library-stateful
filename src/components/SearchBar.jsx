import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  TextInput(searchText, onSearchTextChange) {
    return (
      <div>
        <label htmlFor="text-input" data-testid="text-input-label">
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

  CheckboxInput(bookmarkedOnly, onBookmarkedChange) {
    return (
      <div>
        <label htmlFor="checkbox-input" data-testid="checkbox-input-label">
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

  SelectInput(selectedGenre, onSelectedGenreChange) {
    return (
      <label htmlFor="select-input" data-testid="select-input-label">
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
            {this.TextInput(searchText, onSearchTextChange)}
          </div>
          <div>
            {this.CheckboxInput(bookmarkedOnly, onBookmarkedChange)}
          </div>
          <div>
            {this.SelectInput(selectedGenre, onSelectedGenreChange)}
          </div>
        </form>
      </div>);
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
