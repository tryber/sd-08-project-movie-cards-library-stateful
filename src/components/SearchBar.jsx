// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  FiltraTexto() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label htmlFor="searchText" data-testid="text-input-label">
        Inclui o texto:
        <input
          type="text"
          name="searchText"
          value={ searchText }
          onChange={ onSearchTextChange }
          data-testid="text-input"
        />
      </label>
    );
  }

  InputCheckbox() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <label htmlFor="bookmarkedOnly" data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input
          type="checkbox"
          name="bookmarkedOnly"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
          data-testid="checkbox-input"
        />
      </label>
    );
  }

  FiltraGenero() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <label htmlFor="selectedGenre" data-testid="select-input-label">
        Filtrar por gênero
        <select
          name="selectedGenre"
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
          data-testid="select-input"
        >
          <option value="" data-testid="select-option">Todos</option>
          <option value="action" data-testid="select-option">Ação</option>
          <option value="comedy" data-testid="select-option">Comédia</option>
          <option value="thriller" data-testid="select-option">Suspense</option>
          <option value="fantasy">Fantasia</option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <form data-testid="search-bar-form">
        <div>
          { this.FiltraTexto() }
          { this.InputCheckbox() }
          { this.FiltraGenero() }
        </div>
      </form>
    );
  }
}

SearchBar.propTypes = ({
  searchText: PropTypes.string,
  bookmarkedOnly: PropTypes.bool,
  selectedGenre: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  onBookmarkedChange: PropTypes.func,
  onSelectedGenreChange: PropTypes.func,
}).isRequired;

export default SearchBar;
