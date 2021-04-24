import React from 'react';
import Proptypes from 'prop-types';
import InputText from './searchBarComponents/InputText';
import CheckBox from './searchBarComponents/CheckBox';
import Select from './searchBarComponents/Select';

class SearchBar extends React.Component {
  render() {
    const {
      searchText, onSearchTextChange,
      bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        <InputText change={ onSearchTextChange } value={ searchText } />
        <CheckBox check={ bookmarkedOnly } change={ onBookmarkedChange } />
        <Select value={ selectedGenre } onChange={ onSelectedGenreChange } />
      </form>
    );
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
