import React from 'react';
import PropTypes from 'prop-types';
import SearchBarSelectOptions from './SearchBarSelectOptions';

class SearchBar extends React.Component {
  searchBarTextInput(searchText, onSearchTextChange) {
    return (
      <fieldset>
        <label htmlFor="text-input" data-testid="text-input-label">
          Inclui o texto:
          <input
            type="text"
            name="text-input"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
            id="text-input"
          />
        </label>
      </fieldset>
    );
  }

  SearchBarCheckbox(bookmarkedOnly, onBookmarkedChange) {
    return (
      <fieldset>
        <label htmlFor="checkbox-input" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            name="checkbox-input"
            id="checkbox-input"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
          />
        </label>
      </fieldset>
    );
  }

  SearchBarSelect(selectedGenre, onSelectedGenreChange) {
    return (
      <fieldset>
        <label htmlFor="select-input" data-testid="select-input-label">
          Filtrar por gênero
          <select
            name="select-input"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
            data-testid="select-input"
            id="select-input"
          >
            <SearchBarSelectOptions />
          </select>
        </label>
      </fieldset>
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
    const { searchBarTextInput, SearchBarCheckbox, SearchBarSelect } = this;
    return (
      <form action="" data-testid="search-bar-form">
        {searchBarTextInput(searchText, onSearchTextChange)}
        {SearchBarCheckbox(bookmarkedOnly, onBookmarkedChange)}
        {SearchBarSelect(selectedGenre, onSelectedGenreChange)}
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
