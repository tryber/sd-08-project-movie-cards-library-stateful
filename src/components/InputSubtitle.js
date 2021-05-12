import React from 'react';
import PropTypes from 'prop-types';

class InputSubtitle extends React.Component {
  render() {
    const { subtitle, handleChange } = this.props;
    return (
      <label
        data-testid="subtitle-input-label"
        htmlFor="subtitle-input"
      >
        Subtítulo
        <input
          data-testid="subtitle-input"
          id="subtitle-input"
          name="subtitle"
          onChange={ handleChange }
          type="text"
          value={ subtitle }
        />
      </label>
    );
  }
}

InputSubtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputSubtitle;
