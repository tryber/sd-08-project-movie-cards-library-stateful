import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  createInput() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label htmlFor="text-input" data-testid="text-input-label">
        Inclui o texto:
        <input
          data-testid="text-input"
          type="text"
          value={ searchText }
          onChange={ onSearchTextChange }
        />
      </label>
    );
  }

  createCheckbox() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <label htmlFor="checkbox-input-label" data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input
          data-testid="checkbox-input"
          type="checkbox"
          onChange={ onBookmarkedChange }
          checked={ bookmarkedOnly }
        />
      </label>
    );
  }

  createOption(option, value) {
    return (
      <option data-testid="select-option" value={ value }>
        {option}
      </option>
    );
  }

  createSelect() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <label htmlFor="select-input" data-testid="select-input-label">
        Filtrar por gênero
        <select
          data-testid="select-input"
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
        >
          {this.createOption('Todos', '')}
          {this.createOption('Ação', 'action')}
          {this.createOption('Comédia', 'comedy')}
          {this.createOption('Suspense', 'thriller')}
        </select>
      </label>
    );
  }

  render() {
    return (
      <form data-testid="search-bar-form">
        {this.createInput()}
        {this.createCheckbox()}
        {this.createSelect()}
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
