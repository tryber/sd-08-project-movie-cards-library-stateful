// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  renderSearchInput() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label data-testid="text-input-label" htmlFor="sInput">
        Inclui o texto:
        <input
          name="searchText"
          id="sInput"
          data-testid="text-input"
          value={ searchText }
          onChange={ onSearchTextChange }
        />
      </label>
    );
  }

  renderCheckbox() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;

    return (
      <label data-testid="checkbox-input-label" htmlFor="favInput">
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

  renderOptions() {
    return (
      <>
        <option value="" data-testid="select-option">Todos</option>
        <option value="action" data-testid="select-option">Ação</option>
        <option value="comedy" data-testid="select-option">Comédia</option>
        <option value="thriller" data-testid="select-option">Suspense</option>
      </>
    );
  }

  renderSelect() {
    const { selectedGenre, onSelectedGenreChange } = this.props;

    return (
      <label data-testid="select-input-label" htmlFor="select">
        Filtrar por gênero
        <select
          name="selectedGenre"
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
          id="select"
          data-testid="select-input"
        >
          { this.renderOptions() }
        </select>
      </label>
    );
  }

  render() {
    return (
      <form data-testid="search-bar-form">
        {this.renderSearchInput()}
        {this.renderCheckbox()}
        {this.renderSelect()}
      </form>
    );
  }
}

SearchBar.defaultProps = {
  searchText: '',
  bookmarkedOnly: false,
  selectedGenre: '',
};

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
