// implement SearchBar component here

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './SearchBar.module.css';

const genreOptions = [
  { text: 'Todos', value: '' },
  { text: 'Ação', value: 'action' },
  { text: 'Comédia', value: 'comedy' },
  { text: 'Suspense', value: 'thriller' },
];

class SearchBar extends Component {
  renderTextInput() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label htmlFor="text-input" data-testid="text-input-label">
        Inclui o texto
        <input
          name="text-input"
          id="text-input"
          data-testid="text-input"
          type="text"
          value={ searchText }
          onChange={ onSearchTextChange }
        />
      </label>
    );
  }

  renderCheckBox() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <label htmlFor="check-box" data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input
          name="check-box"
          id="check-box"
          type="checkbox"
          data-testid="checkbox-input"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
        />
      </label>
    );
  }

  renderSelectOptions() {
    return genreOptions.map((option, index) => (
      <option
        key={ index }
        value={ option.value }
        data-testid="select-option"
      >
        {option.text}
      </option>
    ));
  }

  renderSelect() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <label
        htmlFor="select-input"
        data-testid="select-input-label"
      >
        Filtrar por gênero
        <select
          name="select-input"
          id="select-input"
          data-testid="select-input"
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
        >
          { this.renderSelectOptions() }
        </select>
      </label>
    );
  }

  render() {
    return (
      <section className={ styles['search-bar-wrapper'] }>
        <h2 style={ { textAlign: 'center' } }>Pesquisa</h2>
        <form className={ styles['search-bar'] } data-testid="search-bar-form">
          { this.renderTextInput() }
          { this.renderCheckBox() }
          { this.renderSelect() }
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
