import React from 'react';
import PropTypes from 'prop-types';

class InputText extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label data-testid="text-input-label" htmlFor="input-checkbox">
        Inclui o texto:
        <input
          id="input-checkbox"
          data-testid="text-input"
          type="text"
          value={ searchText }
          onChange={ onSearchTextChange }
        />
      </label>
    );
  }
}

InputText.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
};

InputText.defaultProps = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
};

export default InputText;
