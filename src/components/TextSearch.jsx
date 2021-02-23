import React from 'react';
import PropTypes from 'prop-types';

class TextSearch extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label htmlFor="textinput" data-testid="text-input-label">
        Inclui o texto:
        <input
          type="text"
          id="texinput"
          value={ searchText }
          onChange={ onSearchTextChange }
          data-testid="text-input"
        />
      </label>
    );
  }
}

export default TextSearch;

TextSearch.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};
