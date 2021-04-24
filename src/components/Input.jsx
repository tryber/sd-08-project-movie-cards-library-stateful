import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { type, value, onChangeFunction, datadoinput,
      datadolabel, name, labelText, checked } = this.props;
    return (
      <label htmlFor={ name } data-testid={ datadolabel }>
        {labelText}
        <input
          name={ name }
          type={ type }
          value={ value }
          onChange={ onChangeFunction }
          data-testid={ datadoinput }
          checked={ checked }
        />
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  onChangeFunction: PropTypes.func.isRequired,
  datadoinput: PropTypes.string,
  datadolabel: PropTypes.string,
  name: PropTypes.string,
  labelText: PropTypes.string,
  checked: PropTypes.bool,
};
Input.defaultProps = {
  type: 'sem nome',
  value: 'sem nome',
  // onChangeFunction: 'sem nome',
  datadoinput: 'sem nome',
  datadolabel: 'sem nome',
  name: 'sem nome',
  labelText: 'sem nome',
  checked: false,
};

export default Input;
