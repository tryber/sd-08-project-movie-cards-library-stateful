// implement SearchBar component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { searchText } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form">
          <label htmlFor="text-input" data-testid="text-input-label">
            Inclui o texto
            <input
              id="text-input"
              type="text"
              data-testid="text-input"
              value={ searchText }
            />
          </label>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  // bookmarkedOnly: PropTypes.bool.isRequired,
  // selectedGenre: PropTypes.string.isRequired,
};

export default SearchBar;
