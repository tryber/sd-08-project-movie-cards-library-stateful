import React from 'react';
import PropTypes from 'prop-types';

import IncluiTexto from './SearchBar/IncluiTexto';
import MostrarFavoritos from './SearchBar/MostrarFavoritos';
import FiltrarGenero from './SearchBar/FiltrarGenero';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form">
          <IncluiTexto value={ searchText } onChange={ onSearchTextChange } />
          <MostrarFavoritos checked={ bookmarkedOnly } onChange={ onBookmarkedChange } />
          <FiltrarGenero value={ selectedGenre } onChange={ onSelectedGenreChange } />
        </form>
      </div>
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
