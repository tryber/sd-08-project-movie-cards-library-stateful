import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TextInput from './TextInput';
import FavMovie from './FavMovie';
import FilterGender from './FilterGender';

export default class SearchBar extends Component {
  render() {
    const { searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    return (
      <form data-testid="search-bar-form">
        <TextInput value={ searchText } onChange={ onSearchTextChange } />
        <FavMovie checked={ bookmarkedOnly } onChange={ onBookmarkedChange } />
        <FilterGender value={ selectedGenre } onChange={ onSelectedGenreChange } />
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
