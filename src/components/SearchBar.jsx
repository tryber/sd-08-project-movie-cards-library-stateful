import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  inputText() {
    const { searchText, onSearchTextChange } = this.props;

    return (
      <label data-testid="text-input-label" htmlFor="imput-text">
        Inclui o texto:
        <input
          name="searchText"
          data-testid="text-input"
          type="text"
          value={ searchText }
          onChange={ onSearchTextChange }
        />
      </label>
    );
  }

  inputCheckbox() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;

    return (
      <label data-testid="checkbox-input-label" htmlFor="input-checkbox">
        Mostrar somente favoritos
        <input
          name="bookmarkedOnly"
          data-testid="checkbox-input"
          type="checkbox"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
        />
      </label>
    );
  }

  inputSelect() {
    const { selectedGenre, onSelectedGenreChange } = this.props;

    return (
      <label data-testid="select-input-label" htmlFor="select-input">
        Filtrar por gênero
        <select
          name="selectedGenre"
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
    return (
      <form data-testid="search-bar-form">
        { this.inputText() }
        { this.inputCheckbox() }
        { this.inputSelect() }
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
