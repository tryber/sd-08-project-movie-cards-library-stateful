import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputSearchBar from './InputSearchBar';
import InputCheckBox from './InputCheckbox';
import SelectGenre from './SelectGenre';

class SearchBar extends Component {
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
        <InputSearchBar text={ searchText } onTextChange={ onSearchTextChange } />
        <InputCheckBox markedOnly={ bookmarkedOnly } onChange={ onBookmarkedChange } />
        <SelectGenre value={ selectedGenre } onChange={ onSelectedGenreChange } />
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
