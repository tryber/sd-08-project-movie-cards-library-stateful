import React from 'react';
import PropTypes from 'prop-types';

class InputText extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="text-input-label" htmlFor="text-input">
        Inclui o texto:
        <input
          id="text-input"
          data-testid="text-input"
          name="searchText"
          type="text"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputText.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputText;
