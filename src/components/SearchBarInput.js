import React from 'react';
import PropTypes from 'prop-types';

class SearchBarInput extends React.Component {
  render() {
    const { onSearchTextChange, searchText } = this.props;
    return (
      <label data-testid="text-input-label" htmlFor="text-input">
        Inclui o texto
        <input
          type="text"
          name="searchText"
          id="text-input"
          data-testid="text-input"
          value={ searchText }
          onChange={ onSearchTextChange }
        />
      </label>
    );
  }
}

SearchBarInput.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};

export default SearchBarInput;
