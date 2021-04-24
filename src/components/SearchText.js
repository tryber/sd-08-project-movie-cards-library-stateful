import React from 'react';
import PropTypes from 'prop-types';

class SearchText extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;

    return (
      <label htmlFor="input-text" data-testid="text-input-label">
        Inclui o texto:
        <input
          id="input-text"
          type="text"
          value={ searchText }
          onChange={ onSearchTextChange }
          data-testid="text-input"
        />
      </label>
    );
  }
}

SearchText.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func.isRequired,
};

SearchText.defaultProps = {
  searchText: '',
};

export default SearchText;
