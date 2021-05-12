import React from 'react';
import PropTypes from 'prop-types';

class InputText extends React.Component {
  render() {
    const { search, onSearch } = this.props;
    return (
      <label
        data-testid="text-input-label"
        htmlFor="text-input"
      >
        Inclui o texto:
        <input
          data-testid="text-input"
          id="text-input"
          name="searchText"
          onChange={ onSearch }
          type="text"
          value={ search }
        />
      </label>
    );
  }
}

InputText.propTypes = {
  search: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default InputText;
