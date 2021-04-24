import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class SearchBar extends React.Component {
  inputTexto(searchText, onSearchTextChange) {
    return (<Input
      type="text"
      value={ searchText }
      onChangeFunction={ onSearchTextChange }
      datadoinput="text-input"
      datadolabel="text-input-label"
      name="include-text"
      labelText="Inclui o texto"
    />);
  }

  inputCheckbox(onBookmarkedChange, bookmarkedOnly) {
    return (<Input
      type="checkbox"
      onChangeFunction={ onBookmarkedChange }
      datadoinput="checkbox-input"
      datadolabel="checkbox-input-label"
      name="check-input"
      labelText="Mostrar somente favoritos"
      checked={ bookmarkedOnly }
    />);
  }

  inputSelect(selectedGenre, onSelectedGenreChange) {
    return (
      <label htmlFor="select" data-testid="select-input-label">
        Filtrar por gênero:
        <select
          name="select"
          data-testid="select-input"
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
        >
          <option data-testid="select-option" value="">Todos</option>
          <option data-testid="select-option" value="action">Ação</option>
          <option data-testid="select-option" value="comedy">Comédia</option>
          <option data-testid="select-option" value="thriller">Suspense</option>
        </select>
      </label>);
  }

  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        {this.inputTexto(searchText, onSearchTextChange)}
        {this.inputCheckbox(onBookmarkedChange, bookmarkedOnly)}
        {this.inputSelect(selectedGenre, onSelectedGenreChange)}
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
};
SearchBar.defaultProps = {
  searchText: 'sem nome',
  onSearchTextChange: 'sem nome',
  bookmarkedOnly: false,
  onBookmarkedChange: 'sem nome',
  selectedGenre: 'sem nome',
  onSelectedGenreChange: 'sem nome',
};
export default SearchBar;
