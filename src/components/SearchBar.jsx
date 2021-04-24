import React from 'react';
import propTypes from 'prop-types';

import LabelInput from './newComponents/LabelInput';
import TextInput from './newComponents/Input';

class SearchBar extends React.Component {
  formFirtPart() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <>
        <LabelInput name="text" text="Inclui o texto" data="text-input-label" />
        <TextInput
          type="text"
          name="searchText"
          value={ searchText }
          onChange={ onSearchTextChange }
          atribute="text-input"
        />
      </>
    );
  }

  formSecondPart() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <>
        <LabelInput
          name="checkbox"
          text="Mostrar somente favoritos"
          data="checkbox-input-label"
        />
        <input
          type="checkbox"
          name="bookmarkedOnly"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
          data-testid="checkbox-input"
        />
      </>
    );
  }

  formTirtPart() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <>
        <LabelInput name="select" text="Filtrar por gênero" data="select-input-label" />
        <select
          name="selectedGenre"
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
          data-testid="select-input"
        >
          <option data-testid="select-option" value="">Todos</option>
          <option data-testid="select-option" value="action">Ação</option>
          <option data-testid="select-option" value="comedy">Comédia</option>
          <option data-testid="select-option" value="thriller">Suspense</option>
        </select>

      </>
    );
  }

  render() {
    return (
      <form data-testid="search-bar-form">
        {this.formFirtPart()}
        {this.formSecondPart()}
        {this.formTirtPart()}

      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: propTypes.string.isRequired,
  bookmarkedOnly: propTypes.string.isRequired,
  selectedGenre: propTypes.string.isRequired,
  onSearchTextChange: propTypes.func.isRequired,
  onBookmarkedChange: propTypes.func.isRequired,
  onSelectedGenreChange: propTypes.func.isRequired,
};

export default SearchBar;
