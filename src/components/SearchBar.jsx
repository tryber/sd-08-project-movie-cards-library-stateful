import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  addTextInput() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label
            htmlFor="search-input"
            data-testid="text-input-label">Inclui o texto</label>
          <input
            data-testid="text-input"
            onChange={ onSearchTextChange }
            value={ searchText }
            id="search-input"
            type="text"/>
          <label data-testid="checkbox-input-label">Mostrar somente favoritos</label>
          <input
            data-testid="checkbox-input"
            onChange={ onBookmarkedChange }
            checked={ bookmarkedOnly }
            type="checkbox"/>
          <label data-testid="select-input-label">Filtrar por gênero</label>
          <select
            data-testid="select-input"
            onChange={ onSelectedGenreChange }
            value={ selectedGenre }
            checked={ bookmarkedOnly }>
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
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
