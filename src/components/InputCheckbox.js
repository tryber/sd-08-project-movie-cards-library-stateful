import React from 'react';
import PropTypes from 'prop-types';

class InputCheckbox extends React.Component {
  render() {
    const { book, onBook } = this.props;
    return (
      <label
        data-testid="checkbox-input-label"
        htmlFor="checkbox-input"
      >
        Mostrar somente favoritos
        <input
          checked={ book }
          data-testid="checkbox-input"
          id="checkbox-input"
          name="bookmarkedOnly"
          onChange={ onBook }
          type="checkbox"
        />
      </label>
    );
  }
}

InputCheckbox.propTypes = {
  book: PropTypes.bool.isRequired,
  onBook: PropTypes.func.isRequired,
};

export default InputCheckbox;
