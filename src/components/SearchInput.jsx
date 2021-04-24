import React from 'react';
import PropTypes from 'prop-types';

class SearchInput extends React.Component {
  render() {
    const { searchText, onChange } = this.props;
    return (
      <label data-testid="text-input-label" htmlFor="input-id">
        Inclui o texto:
        <input
          id="input-id"
          type="text"
          value={ searchText }
          onChange={ onChange }
          data-testid="text-input"
        />
      </label>
    );
  }
}

SearchInput.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
}.isRequired;

export default SearchInput;
