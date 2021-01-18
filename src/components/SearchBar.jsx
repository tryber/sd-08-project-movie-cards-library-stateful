// implement SearchBar component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.props;
    return (
      <div>
        <p>{ searchText }</p>
        <p>{ bookmarkedOnly }</p>
        <p>{ selectedGenre }</p>
        <form data-testid="search-bar-form">
          <input type="text" data-testid="text-input" />
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  selectedGenre: PropTypes.string.isRequired,
};

export default SearchBar;
