import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  functionRenderSelect() {
    const { onSelectedGenreChange, selectedGenre } = this.props;
    return (
      <label data-testid="select-input-label" htmlFor="select-input-label">
        Filtrar por gênero
        <select
          data-testid="select-input"
          onChange={ onSelectedGenreChange }
          value={ selectedGenre }
        >
          <option value="" data-testid="select-option">Todos</option>
          <option value="action" data-testid="select-option">Ação</option>
          <option value="comedy" data-testid="select-option">Comédia</option>
          <option value="thriller" data-testid="select-option">Suspense</option>
        </select>
      </label>
    );
  }

  functionRenderBook() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <input
        className="s-book"
        data-testid="checkbox-input"
        type="checkbox"
        id="checkbox-input"
        name="checkbox-input"
        onChange={ onBookmarkedChange }
        checked={ bookmarkedOnly }
      />
    );
  }

  renderInputText() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <input
        className="s-input"
        id="text-input-label"
        type="text"
        value={ searchText }
        onChange={ onSearchTextChange }
        data-testid="text-input"
      />
    );
  }

  render() {
    return (
      <form className="s" data-testid="search-bar-form">
        <label htmlFor="text-input-label" data-testid="text-input-label">
          Inclui o texto:
          { this.renderInputText() }
        </label>
        <label data-testid="checkbox-input-label" htmlFor="checkbox-input-label">
          Mostrar somente favoritos
          { this.functionRenderBook() }
        </label>
        {this.functionRenderSelect()}
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
