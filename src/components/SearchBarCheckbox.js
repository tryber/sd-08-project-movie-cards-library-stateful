import React from 'react';
import PropTypes from 'prop-types';

class SearchBarCheckbox extends React.Component {
  render() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <label htmlFor="bookmarked-only" data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input
          type="checkbox"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
          name="bookmarkedOnly"
          id="bookmarked-only"
          data-testid="checkbox-input"
        />
      </label>
    );
  }
}

SearchBarCheckbox.propTypes = {
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
};

export default SearchBarCheckbox;
