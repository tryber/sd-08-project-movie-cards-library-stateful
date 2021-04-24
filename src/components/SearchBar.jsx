import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  searchTextComponent(searchText, onSearchTextChange) {
    return (
      <label data-testid="text-input-label" htmlFor="text-input">
        Inclui o texto
        <input
          value={ searchText }
          onChange={ onSearchTextChange }
          data-testid="text-input"
        />
      </label>
    );
  }

  checkBoxComponent(bookmarkedOnly, onBookmarkedChange) {
    return (
      <label data-testid="checkbox-input-label" htmlFor="checkbox-input">
        <input
          data-testid="checkbox-input"
          type="checkbox"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
        />
        Mostrar somente favoritos
      </label>
    );
  }

  selectComponent(selectedGenre, onSelectedGenreChange) {
    return (
      <label data-testid="select-input-label" htmlFor="select-input">
        Filtrar por gênero
        <select
          data-testid="select-input"
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
          control={ selectedGenre }
          label="select-input"
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
    const { bookmarkedOnly, onBookmarkedChange, onSelectedGenreChange } = this.props;
    const { searchText, onSearchTextChange, selectedGenre } = this.props;
    return (
      <div>
        <p>Hello!</p>
        <form data-testid="search-bar-form" method="get">
          { this.searchTextComponent(searchText, onSearchTextChange) }
          { this.checkBoxComponent(bookmarkedOnly, onBookmarkedChange)}
          { this.selectComponent(selectedGenre, onSelectedGenreChange)}
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
  onSelectedGenreChange: PropTypes.string.isRequired,
};

export default SearchBar;
