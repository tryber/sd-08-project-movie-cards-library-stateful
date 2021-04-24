import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.renderInputText = this.renderInputText.bind(this);
    this.renderCheckbox = this.renderCheckbox.bind(this);
  }

  renderInputText() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label htmlFor="searchInput" data-testid="text-input-label">
        Inclui o texto:
        <input
          className="input-text"
          name="searchText"
          value={ searchText }
          onChange={ onSearchTextChange }
          id="searchInput"
          data-testid="text-input"
        />
      </label>
    );
  }

  renderCheckbox() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <label htmlFor="checkbox" data-testid="checkbox-input-label">
        <input
          className="input-checkbox"
          name="bookmarkedOnly"
          type="checkbox"
          id="checkbox"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
          data-testid="checkbox-input"
        />
        Mostrar somente favoritos
      </label>
    );
  }

  renderSelect(genre, change) {
    return (
      <label htmlFor="select" data-testid="select-input-label">
        Filtrar por gênero
        <select
          className="input-select"
          name="selectedGenre"
          value={ genre }
          id="select"
          onChange={ change }
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
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <section className="section-form">
        <form data-testid="search-bar-form">
          {this.renderInputText()}
          {this.renderCheckbox()}
          {this.renderSelect(selectedGenre, onSelectedGenreChange)}
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
