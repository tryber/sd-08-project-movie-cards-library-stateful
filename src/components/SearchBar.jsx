import React from 'react';

import PropTypes from 'prop-types';
import InputText from './searchBar/InputText';
import InputCheckBox from './searchBar/InputCheckBox';
import Select from './searchBar/Select';

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
        <InputText value={ searchText } onChange={ onSearchTextChange } />
        <InputCheckBox checked={ bookmarkedOnly } onChange={ onBookmarkedChange } />
        <Select value={ selectedGenre } onChange={ onSelectedGenreChange } />
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
