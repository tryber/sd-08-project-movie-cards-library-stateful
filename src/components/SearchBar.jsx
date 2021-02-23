// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';
import SelectGenre from './SelectGenre';
import ShowFavorites from './ShowFavorites';
import TextSearch from './TextSearch';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, selectedGenre,
      onBookmarkedChange, onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <TextSearch
          searchText={ searchText }
          onSearchTextChange={ onSearchTextChange }
        />
        <ShowFavorites
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ onBookmarkedChange }
        />
        <SelectGenre
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ onSelectedGenreChange }
        />
      </form>);
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
