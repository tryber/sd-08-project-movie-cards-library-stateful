import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Textarea extends Component {
  render() {
    const { name, children, onChange, value, labelTestId, inputTestId } = this.props;
    return (
      <label htmlFor={ name } data-testid={ labelTestId }>
        { children }
        <textarea
          id={ name }
          name={ name }
          data-testid={ inputTestId }
          onChange={ onChange }
          value={ value }
        />
      </label>
    );
  }
}

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  labelTestId: PropTypes.string.isRequired,
  inputTestId: PropTypes.string.isRequired,
};

export default Textarea;
