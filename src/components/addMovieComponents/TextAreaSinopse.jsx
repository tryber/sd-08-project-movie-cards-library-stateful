import React from 'react';
import propTypes from 'prop-types';

class TextAreaSinopse extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="textarea-sinopse" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          id="textarea-sinopse"
          cols="30"
          rows="10"
          value={ value }
          onChange={ onChange }
          data-testid="storyline-input"
        />
      </label>
    );
  }
}

export default TextAreaSinopse;

TextAreaSinopse.propTypes = {
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};
