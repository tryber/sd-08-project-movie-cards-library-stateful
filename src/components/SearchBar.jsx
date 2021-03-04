import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.textInput = this.textInput.bind(this);
    this.checkboxInput = this.checkboxInput.bind(this);
    this.selectInput = this.selectInput.bind(this);
  }

  textInput() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label data-testid="text-input-label" htmlFor="text-input">
        Inclui o texto:
        <input
          type="text"
          name="searchText"
          value={ searchText }
          onChange={ onSearchTextChange }
          data-testid="text-input"
          id="text-input"
        />
      </label>
    );
  }

  checkboxInput() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <label htmlFor="checkbox-input-label" data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input
          type="checkbox"
          name="bookmarkedOnly"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
          data-testid="checkbox-input"
          id="checkbox-input"
        />
      </label>
    );
  }

  selectInput(options) {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <label data-testid="select-input-label" htmlFor="select-input">
        Filtrar por gênero
        <select
          value={ selectedGenre }
          id="select-input"
          name="selectedGenre"
          data-testid="select-input"
          onChange={ onSelectedGenreChange }
        >
          {options.map(({ text, value }) => (
            <option key={ text } data-testid="select-option" value={ value }>
              { text }
            </option>))}
        </select>
      </label>
    );
  }

  render() {
    const options = [
      { text: 'Todos', value: '' },
      { text: 'Ação', value: 'action' },
      { text: 'Comédia', value: 'comedy' },
      { text: 'Suspense', value: 'thriller' },
    ];
    return (
      <form data-testid="search-bar-form">
        {this.textInput()}
        {this.checkboxInput()}
        {this.selectInput(options)}
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
