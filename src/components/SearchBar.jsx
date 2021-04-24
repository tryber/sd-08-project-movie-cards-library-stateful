import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  fillTextLabelHmlt(searchText, onSearchTextChange) {
    return (
      <label htmlFor="text" data-testid="text-input-label">
        Inclui o texto:
        <input
          data-testid="text-input"
          type="text"
          name="searchText"
          value={ searchText }
          onChange={ onSearchTextChange }
        />
      </label>
    );
  }

  fillCheckboxHtml(bookmarkedOnly, onBookmarkedChange) {
    return (
      <label htmlFor="checkbox" data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input
          data-testid="checkbox-input"
          type="checkbox"
          name="bookmarkedOnly"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
        />
      </label>
    );
  }

  fillSelectHtml(selectedGenre, onSelectedGenreChange) {
    return (
      <label htmlFor="selectList" data-testid="select-input-label">
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
    const { searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        {this.fillTextLabelHmlt(searchText, onSearchTextChange)}
        {this.fillCheckboxHtml(bookmarkedOnly, onBookmarkedChange)}
        {this.fillSelectHtml(selectedGenre, onSelectedGenreChange)}
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
