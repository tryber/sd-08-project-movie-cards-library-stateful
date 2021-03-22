import React from 'react';
import PropTypes from 'prop-types';
import SearchBarInput from './SearchBarInput';
import SearchBarCheckbox from './SearchBarCheckbox';

class SearchBarFields extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
    } = this.props;
    return (
      <>
        <SearchBarInput
          searchText={ searchText }
          onSearchTextChange={ onSearchTextChange }
        />
        <SearchBarCheckbox
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ onBookmarkedChange }
        />
      </>
    );
  }
}

SearchBarFields.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
};

export default SearchBarFields;
