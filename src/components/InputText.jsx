import React from 'react';
import PropTypes from 'prop-types';

class InputText extends React.Component {
  render() {
    const { value, func } = this.props;

    return (
      <label data-testid="text-input-label" htmlFor="searchText">
        Inclui o texto
        <input
          type="text"
          name="searchText"
          value={ value }
          onChange={ func }
          data-testid="text-input"
        />
      </label>
    );
  }
}

InputText.propTypes = {
  value: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};

export default InputText;
