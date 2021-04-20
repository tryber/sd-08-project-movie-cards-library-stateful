import React from 'react';
import PropTypes from 'prop-types';

class InputAddTextArea extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="input-area" data-testid="storyline-input-label">
        Sinopse
        <textarea
          id="input-area"
          name="storyline"
          rows="5"
          cols="33"
          data-testid="storyline-input"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

InputAddTextArea.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
};

InputAddTextArea.defaultProps = {
  value: '',
  handleChange: () => {},
};

export default InputAddTextArea;
