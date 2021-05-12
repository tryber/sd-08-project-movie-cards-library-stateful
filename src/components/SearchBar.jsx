import React from 'react';
import PropTypes from 'prop-types';
import InputText from './InputText';
import InputCheckbox from './InputCheckbox';
import InputSelect from './InputSelect';

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
        <InputText search={ searchText } onSearch={ onSearchTextChange } />
        <InputCheckbox book={ bookmarkedOnly } onBook={ onBookmarkedChange } />
        <InputSelect selected={ selectedGenre } onSelected={ onSelectedGenreChange } />
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
