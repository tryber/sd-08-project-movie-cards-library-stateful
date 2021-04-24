import React from 'react';

import PropTypes from 'prop-types';
import FiltrarGenero from './FiltrarGenero';
import Favoritos from './Favoritos';
import Text from './IncluiText';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange,
      bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form">
          <Text onChange={ onSearchTextChange } value={ searchText } />
          <Favoritos onChange={ onBookmarkedChange } checked={ bookmarkedOnly } />
          <FiltrarGenero onChange={ onSelectedGenreChange } value={ selectedGenre } nam />
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
