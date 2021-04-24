import React from 'react';
import PropTypes from 'prop-types';

class TextInputLabel extends React.Component {
  render() {
    const { labelText, name, type, value, onChange,
      dataTestId, dataLabelTestId } = this.props;

    return (
      <label htmlFor={ name } data-testid={ dataLabelTestId }>
        { labelText }
        <input
          type={ type }
          name={ name }
          value={ value }
          onChange={ onChange }
          data-testid={ dataTestId }
        />
      </label>
    );
  }
}

TextInputLabel.propTypes = {
  labelText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  dataTestId: PropTypes.string.isRequired,
  dataLabelTestId: PropTypes.string.isRequired,
};

export default TextInputLabel;
