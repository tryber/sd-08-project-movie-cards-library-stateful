import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  optionsMap(data, testId) {
    return data.map(({ optValue, text }) => (
      <option key={ optValue } value={ optValue } data-testid={ testId }>
        { text }
      </option>
    ));
  }

  render() {
    const { data, name, children,
      onChange, value, labelTestId, inputTestId, optionTestId } = this.props;

    return (
      <label htmlFor={ name } data-testid={ labelTestId }>
        { children }
        <select
          id={ name }
          name={ name }
          data-testid={ inputTestId }
          onChange={ onChange }
          value={ value }
        >
          { this.optionsMap(data, optionTestId) }
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  labelTestId: PropTypes.string.isRequired,
  inputTestId: PropTypes.string.isRequired,
  optionTestId: PropTypes.string.isRequired,
};

export default Select;
