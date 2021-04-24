import React from 'react';
import propTypes from 'prop-types';

class TextInput extends React.Component {
  render() {
    const { value, onChange, atribute, name, type } = this.props;
    return (
      <input
        type={ type }
        value={ value }
        onChange={ onChange }
        data-testid={ atribute }
        name={ name }
      />
    );
  }
}

TextInput.propTypes = {
  value: propTypes.string.isRequired,
  onChange: propTypes.string.isRequired,
  atribute: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
};

export default TextInput;
