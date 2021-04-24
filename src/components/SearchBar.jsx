import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  constructor() {
    super();
    this.inputCreator = this.inputCreator.bind(this);
    this.favoriteCreator = this.favoriteCreator.bind(this);
    this.selectedCreator = this.selectedCreator.bind(this);
  }

  inputCreator() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label htmlFor="text-input" data-testid="text-input-label">
        Inclui o texto
        <input
          value={ searchText }
          name="searchText"
          onChange={ onSearchTextChange }
          type="text"
          data-testid="text-input"
        />
      </label>
    );
  }

  favoriteCreator() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <label htmlFor="checkbox-input" data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input
          checked={ bookmarkedOnly }
          name="bookmarkedOnly"
          type="checkbox"
          onChange={ onBookmarkedChange }
          data-testid="checkbox-input"
        />
      </label>
    );
  }

  selectedCreator() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <label htmlFor="select-input" data-testid="select-input-label">
        Filtrar por gênero
        <select
          value={ selectedGenre }
          name="selectedGenre"
          onChange={ onSelectedGenreChange }
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
    return (
      <>
        <p>SearchBar</p>
        <form data-testid="search-bar-form">
          {this.inputCreator()}
          {this.favoriteCreator()}
          {this.selectedCreator()}

        </form>
      </>
    );
  }
}
SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
