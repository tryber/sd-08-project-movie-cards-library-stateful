import React from 'react';
import PropTypes from 'prop-types';
import './searchBar.css';

class SearchBar extends React.Component {
  renderInput() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <input
        id="text-input-label"
        type="text"
        value={ searchText }
        onChange={ onSearchTextChange }
        data-testid="text-input"
      />
    );
  }

  renderCheckBox() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <input
        type="checkbox"
        id="checkbox-input"
        checked={ bookmarkedOnly }
        onChange={ onBookmarkedChange }
        data-testid="checkbox-input"
      />
    );
  }

  renderSelect() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <select
        onChange={ onSelectedGenreChange }
        value={ selectedGenre }
        id="select-input"
        data-testid="select-input"
      >
        <option data-testid="select-option" value="">Todos</option>
        <option data-testid="select-option" value="action">Ação</option>
        <option data-testid="select-option" value="comedy">Comédia</option>
        <option data-testid="select-option" value="thriller">Suspense</option>
      </select>
    );
  }

  render() {
    return (
      <form className="search-bar" data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="text-input-label">
          Inclui o texto:
          { this.renderInput() }
        </label>
        <label data-testid="checkbox-input-label" htmlFor="checkbox-input">
          { this.renderCheckBox() }
          Mostrar somente favoritos
        </label>
        <label data-testid="select-input-label" htmlFor="select-input">
          Filtrar por gênero
          { this.renderSelect() }
        </label>
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
