// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';
import InputText from './InputText';
import CheckBox from './CheckBox';
import SelectGenre from './SelectGenre';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <InputText value={ searchText } func={ onSearchTextChange } />
        <CheckBox checked={ bookmarkedOnly } func={ onBookmarkedChange } />
        <SelectGenre value={ selectedGenre } func={ onSelectedGenreChange } />
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
};

SearchBar.defaultProps = {
  searchText: 'oi',
  onSearchTextChange: 'oie',
  bookmarkedOnly: true,
  onBookmarkedChange: 'oie',
  selectedGenre: 'oi',
  onSelectedGenreChange: 'oie',
};

export default SearchBar;
