import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.searchBarInput = this.searchBarInput.bind(this);
    this.checkBoxFav = this.checkBoxFav.bind(this);
    this.genreFilter = this.genreFilter.bind(this);
  }

  searchBarInput(searchText, onSearchTextChange) {
    return (
      <label htmlFor="search-bar-input" data-testid="text-input-label">
        Inclui o texto:
        <input
          name="search-bar-input"
          data-testid="text-input"
          type="text"
          value={ searchText }
          onChange={ onSearchTextChange }
        />
      </label>
    );
  }

  checkBoxFav(bookmarkedOnly, onBookmarkedChange) {
    return (
      <label htmlFor="checkbox-fav" data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input
          name="checkbox-fav"
          type="checkbox"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
          data-testid="checkbox-input"
        />
      </label>
    );
  }

  genreFilter(selectedGenre, onSelectedGenreChange) {
    return (
      <label htmlFor="genre-filter" data-testid="select-input-label">
        Filtrar por gênero
        <select
          name="genre-filter"
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
    const { searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        { this.searchBarInput(searchText, onSearchTextChange) }
        { this.checkBoxFav(bookmarkedOnly, onBookmarkedChange) }
        { this.genreFilter(selectedGenre, onSelectedGenreChange) }
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
