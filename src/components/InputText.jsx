import React from 'react';
import Proptypes from 'prop-types';

class InputText extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label
        htmlFor="input-text"
        data-testid="text-input-label"
      >
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

export default InputText;

InputText.propTypes = {
  searchText: Proptypes.string.isRequired,
  onSearchTextChange: Proptypes.func.isRequired,
};
