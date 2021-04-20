import React from 'react';
import PropTypes from 'prop-types';

class InputAddSubtitle extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label htmlFor="input-subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          data-testid="subtitle-input"
          name="subtitle"
          type="text"
          id="input-subtitle"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

InputAddSubtitle.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
};

InputAddSubtitle.defaultProps = {
  value: '',
  handleChange: () => {},
};

export default InputAddSubtitle;
