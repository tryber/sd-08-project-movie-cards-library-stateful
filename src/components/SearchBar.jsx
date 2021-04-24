// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre,
      onSelectedGenreChange } = this.props;
    
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label">
          Inclui o texto: <br />
          <input value={ searchText } onChange={ onSearchTextChange } data-testid="text-input"/>
        </label><br />
        <label data-testid="checkbox-input-label">
          Mostrar somente favoritos <br />
          <input type="checkbox" checked={ bookmarkedOnly } onChange= { onBookmarkedChange }
            data-testid="checkbox-input" />
        </label><br />
        <label data-testid="select-input-label">
          Filtrar por gênero <br />
          <select value={ selectedGenre } onChange={ onSelectedGenreChange } 
            data-testid="select-input">
            <option value="" data-testid="select-option">Todos</option>
            <option value="action" data-testid="select-option">Ação</option>
            <option value="comedy" data-testid="select-option">Comédia</option>
            <option value="thriller" data-testid="select-option">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGengreChange: PropTypes.func
}

export default SearchBar;