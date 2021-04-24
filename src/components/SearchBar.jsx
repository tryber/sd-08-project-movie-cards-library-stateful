// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  InputTextLabel(searchText, onSearchTextChange) {
    return (
      <label htmlFor="text-input" data-testid="text-input-label">
        Inclui o texto
        <input
          type="text"
          data-testid="text-input"
          value={ searchText }
          onChange={ onSearchTextChange }
        />
      </label>
    );
  }

  CheckBoxLabel(bookmarkedOnly, onBookmarkedChange) {
    return (
      <label htmlFor="checkbox-input" data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input
          type="checkbox"
          data-testid="checkbox-input"
          name="checkbox-input"
          id="checkbox-input"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
        />
      </label>
    );
  }

  SelectGenreLabel(selectedGenre, onSelectedGenreChange) {
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
        {this.InputTextLabel(searchText, onSearchTextChange)}
        {this.CheckBoxLabel(bookmarkedOnly, onBookmarkedChange)}
        {this.SelectGenreLabel(selectedGenre, onSelectedGenreChange)}
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
