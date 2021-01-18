import React from 'react';

import PropTypes from 'prop-types';
import InputText from './InputText';
import InputCheckBox from './InputCheckBox';
import Select from './Select';

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
        <InputCheckBox value={ bookmarkedOnly } onChange={ onBookmarkedChange } />
        <Select value={ selectedGenre } onChange={ onSelectedGenreChange } />
      </form>
    );
  }
}

SearchBar.defaultProps = {
  bookmarkedOnly: { false: false },
};

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
