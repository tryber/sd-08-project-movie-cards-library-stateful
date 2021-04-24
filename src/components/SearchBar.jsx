/* eslint-disable max-lines-per-function */
// implement SearchBar component here
import React from 'react';
import Proptypes from 'prop-types';

import Select from './Select';
import InputText from './InputText';
import InputCheckBox from './InputCheckBox';

class SearchBar extends React.Component {
  renderContent() {
    const { searchText, onSearchTextChange,
      bookmarkedOnly, onBookmarkedChange, selectedGenre,
      onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <InputText
          searchText={ searchText }
          onSearchTextChange={ onSearchTextChange }
        />
        <InputCheckBox
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ onBookmarkedChange }
        />
        <Select
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ onSelectedGenreChange }
        />
      </form>);
  }

  render() {
    return this.renderContent();
  }
}

export default SearchBar;

SearchBar.propTypes = {
  searchText: Proptypes.string.isRequired,
  onSearchTextChange: Proptypes.func.isRequired,
  bookmarkedOnly: Proptypes.bool.isRequired,
  onBookmarkedChange: Proptypes.func.isRequired,
  selectedGenre: Proptypes.string.isRequired,
  onSelectedGenreChange: Proptypes.func.isRequired,
};
