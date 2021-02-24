// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class InputField extends React.Component {
  render() {
    const { objProps } = this.props;

    return (
      <label data-testid="text-input-label" htmlFor="input-search">
        Inclui o texto
        <input
          name="input-search"
          type="text"
          value={ objProps.searchText }
          onChange={ objProps.onSearchTextChange }
          data-testid="text-input"
        />
      </label>
    );
  }
}

export default InputField;

InputField.propTypes = {
  objProps: PropTypes.shape({
    searchText: PropTypes.string.isRequired,
    onSearchTextChange: PropTypes.func.isRequired,
    bookmarkedOnly: PropTypes.bool.isRequired,
    onBookmarkedChange: PropTypes.func.isRequired,
    selectedGenre: PropTypes.string.isRequired,
    onSelectedGenreChange: PropTypes.func.isRequired,
  }).isRequired,
};
