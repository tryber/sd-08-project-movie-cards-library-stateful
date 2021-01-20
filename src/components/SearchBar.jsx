// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';

const renderInput = ({ searchText, onSearchTextChange }) => (
  <label htmlFor="text-input" data-testid="text-input-label">
    Inclui o texto
    <input
      id="text-input"
      type="text"
      data-testid="text-input"
      value={ searchText }
      onChange={ onSearchTextChange }
    />
  </label>
);

const renderCheckbox = ({ bookmarkedOnly, onBookmarkedChange }) => (
  <label htmlFor="checkbox-input" data-testid="checkbox-input-label">
    Mostrar somente favoritos
    <input
      id="checkbox-input"
      type="checkbox"
      checked={ bookmarkedOnly }
      onChange={ onBookmarkedChange }
      data-testid="checkbox-input"
    />
  </label>
);

const renderSelect = ({ selectedGenre, onSelectedGenreChange }) => (
  <label htmlFor="select-input" data-testid="select-input-label">
    Filtrar por gênero
    <select
      name="select-input"
      id="select-input"
      data-testid="select-input"
      value={ selectedGenre }
      onChange={ onSelectedGenreChange }
    >
      <option value="" data-testid="select-option">Todos</option>
      <option value="action" data-testid="select-option">Ação</option>
      <option value="comedy" data-testid="select-option">Comédia</option>
      <option value="thriller" data-testid="select-option">Suspense</option>
    </select>
  </label>
);

const SearchBar = (props) => (
  <div>
    Search bar
    <form data-testid="search-bar-form">
      { renderInput(props) }
      { renderCheckbox(props) }
      { renderSelect(props) }
    </form>
  </div>
);

export default SearchBar;
