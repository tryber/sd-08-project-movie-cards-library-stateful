import React from 'react';
import PropTypes from 'prop-types';

class TextAreaLabel extends React.Component {
  render() {
    const { labelText, name, value, onChange, dataTestId, dataLabelTestId } = this.props;

    return (
      <label htmlFor={ name } data-testid={ dataLabelTestId }>
        { labelText }
        <textarea
          type="text"
          name={ name }
          value={ value }
          onChange={ onChange }
          data-testid={ dataTestId }
        />
      </label>
    );
  }
}

TextAreaLabel.propTypes = {
  labelText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  dataTestId: PropTypes.string.isRequired,
  dataLabelTestId: PropTypes.string.isRequired,
};

export default TextAreaLabel;
