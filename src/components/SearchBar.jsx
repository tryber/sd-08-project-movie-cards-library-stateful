import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor() {
    super();

    this.inputText = this.inputText.bind(this);
    this.inputCheckbox = this.inputCheckbox.bind(this);
    this.genreSelector = this.genreSelector.bind(this);
  }

  inputText() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label data-testid="text-input-label" htmlFor="text-input">
        Inclui o texto:
        <input
          type="text"
          name="searchText"
          id="searchText"
          value={ searchText }
          onChange={ onSearchTextChange }
          data-testid="text-input"
        />
      </label>
    );
  }

  inputCheckbox() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <label data-testid="checkbox-input-label" htmlFor="checkbox-input">
        Mostrar somente favoritos:
        <input
          type="checkbox"
          name="bookmarkedOnly"
          id="checkbox-input"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
          data-testid="checkbox-input"
        />
      </label>
    );
  }

  genreSelector() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <label data-testid="select-input-label" htmlFor="select-genre">
        Filtrar por gênero:
        <select
          name="selectedGenre"
          id="select-genre"
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
    return (
      <section className="search-form">
        <form data-testid="search-bar-form">
          { this.inputText() }
          { this.inputCheckbox() }
          { this.genreSelector() }
        </form>
      </section>
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
