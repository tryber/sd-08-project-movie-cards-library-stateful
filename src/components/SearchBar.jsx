import React from 'react';

import PropTypes from 'prop-types';

import Favoritos from './favoritos';
import FiltraGenero from './filtragenero';
import IncluiTexto from './incluitexto';

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
      <form data-testid="search-bar-form">
        <IncluiTexto value={ searchText } onChange={ onSearchTextChange } />
        <Favoritos checked={ bookmarkedOnly } onChange={ onBookmarkedChange } />
        <FiltraGenero value={ selectedGenre } onChange={ onSelectedGenreChange } />
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
