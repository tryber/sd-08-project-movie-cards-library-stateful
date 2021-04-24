import React from 'react';

class Input extends React.Component {
  render() {
    const { name, type, testInput, testLabel, func, value } = this.props;
    return (
      <label htmlFor={ name } data-testid={ testLabel }>
        Título
        <input
          name={ name }
          type={ type }
          data-testid={ testInput }
          onChange={ func }
          value={ value }
        />
      </label>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  testInput: PropTypes.string.isRequired,
  testLabel: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Input;
