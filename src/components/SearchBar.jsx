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
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
}.isRequired;
