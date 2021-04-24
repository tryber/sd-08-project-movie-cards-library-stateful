// implement SearchBar component here
import React from 'react';
import Proptypes from 'prop-types';
import './css/SearchBar.css';

class SeachBar extends React.Component {
  renderInput(searchText, onSearchTextChange) {
    return (
      <label data-testid="text-input-label" htmlFor="searchInput">
        Inclui o texto:
        <input
          data-testid="text-input"
          type="text"
          value={ searchText }
          onChange={ onSearchTextChange }
          id="searchInput"
          className="search-text"
          placeholder="Digite o nome do filme"
        />
      </label>
    );
  }

  renderCheckBox(bookmarkedOnly, onBookmarkedChange) {
    return (
      <label htmlFor="checkboxFilter" data-testid="checkbox-input-label">
        <input
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
          data-testid="checkbox-input"
          type="checkbox"
        />
        Mostrar somente favoritos
      </label>
    );
  }

  renderSelect(selectedGenre, onSelectedGenreChange) {
    return (
      <label data-testid="select-input-label" htmlFor="filterSelect">
        Filtrar por gênero
        <select
          onChange={ onSelectedGenreChange }
          id="filterSelect"
          value={ selectedGenre }
          data-testid="select-input"
          className="selectGenre"
        >
          <option value="" data-testid="select-option">Todos</option>
          <option value="action" data-testid="select-option">Ação</option>
          <option value="comedy" data-testid="select-option"> Comédia</option>
          <option value="thriller" data-testid="select-option">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange } = this.props;
    return (
      <form
        data-testid="search-bar-form"
        className="search-bar-form"
      >
        {this.renderInput(searchText, onSearchTextChange)}
        <div className="filter-checks">
          {this.renderCheckBox(bookmarkedOnly, onBookmarkedChange)}
          {this.renderSelect(selectedGenre, onSelectedGenreChange)}
        </div>
      </form>
    );
  }
}

SeachBar.propTypes = {
  searchText: Proptypes.string.isRequired,
  onSearchTextChange: Proptypes.func.isRequired,
  bookmarkedOnly: Proptypes.bool.isRequired,
  onBookmarkedChange: Proptypes.func.isRequired,
  selectedGenre: Proptypes.string.isRequired,
  onSelectedGenreChange: Proptypes.func.isRequired,
};
export default SeachBar;
