import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  renderTextSearch() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label htmlFor="searchInput" data-testid="text-input-label">
        Inclui o texto:
        <input
          type="text"
          value={ searchText }
          onChange={ onSearchTextChange }
          id="searchInput"
          data-testid="text-input"
        />
      </label>
    );
  }

  renderFavBox() {
    const { bookmarkedOnly,
      onBookmarkedChange } = this.props;
    return (
      <label htmlFor="checkboxInput" data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input
          type="checkbox"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
          data-testid="checkbox-input"
          id="checkboxInput"
        />
      </label>
    );
  }

  renderSelectSearch() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <label htmlFor="selectInput" data-testid="select-input-label">
        Filtrar por gênero
        <select
          name="select"
          id="selectInput"
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
    return (
      <form data-testid="search-bar-form" className="search-bar">
        { this.renderTextSearch() }
        { this.renderFavBox() }
        { this.renderSelectSearch() }
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
