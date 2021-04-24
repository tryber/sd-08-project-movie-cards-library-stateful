import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.projectIsFresco1 = this.projectIsFresco1.bind(this);
    this.projectIsFresco2 = this.projectIsFresco2.bind(this);
    this.projectIsFresco3 = this.projectIsFresco3.bind(this);
  }

  projectIsFresco1() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <div key="searchText">
        <label htmlFor="searchText" data-testid="text-input-label">
          Inclui o texto:
          <input
            id="searchText"
            name="searchText"
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label>
      </div>
    );
  }

  projectIsFresco2() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <div key="checkbox-input">
        <label htmlFor="checkbox-input" data-testid="checkbox-input-label">
          Mostrar somente favoritos:
          <input
            name="bookmarkedOnly"
            id="checkbox-input"
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
          />
        </label>
      </div>
    );
  }

  projectIsFresco3() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <label htmlFor="select-input" data-testid="select-input-label">
        Filtrar por gênero:
        <select
          name="selectedGenre"
          value={ selectedGenre }
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
      <form data-testid="search-bar-form">
        <fieldset>
          {this.projectIsFresco1()}
          {this.projectIsFresco2()}
          { this.projectIsFresco3()}
        </fieldset>
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
