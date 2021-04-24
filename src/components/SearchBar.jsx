import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';
class SearchBar extends Component {

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

      <div>
        <form data-testid="search-bar-form" className="form-class">
          <label htmlFor="textInput"
            data-testid="text-input-label"
            className="label-class"
          >
            Inclui o texto:
          </label>
          <input
            type="text"
            name="searchText"
            value={searchText}
            onChange={onSearchTextChange}
            data-testid="text-input"
            className="text-input"
          />

          <input
            type="checkbox"
            name="bookmarkedOnly"
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
            data-testid="checkbox-input"
            className="checkbox-input"
          />

          <label
            htmlFor="checkboxInput"
            data-testid="checkbox-input-label"
            className="label-checkbox"
          >
            Mostrar somente favoritos
            </label>

          <label
            htmlFor="selectInput"
            data-testid="select-input-label"
            className="label-class"
          >
            Filtrar por gênero
            </label>
          <select
            name="selectedGenre"
            value={selectedGenre}
            onChange={onSelectedGenreChange}
            data-testid="select-input"
            className="select-input"
          >
            <option value="" data-testid="select-option">
              Todos
            </option>
            <option value="action" data-testid="select-option">
              Ação
            </option>
            <option value="comedy" data-testid="select-option">
              Comédia
            </option>
            <option value="thriller" data-testid="select-option">
              Suspense
            </option>
          </select>
        </form>
        < /div>
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
