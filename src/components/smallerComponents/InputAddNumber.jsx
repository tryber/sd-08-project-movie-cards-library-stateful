import React from 'react';
import PropTypes from 'prop-types';

class InputAddNumber extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label
        htmlFor="input-number"
        data-testid="rating-input-label"
      >
        Avaliação
        <input
          name="rating"
          type="number"
          id="input-number"
          data-testid="rating-input"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

InputAddNumber.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
};

InputAddNumber.defaultProps = {
  value: '',
  handleChange: () => {},
};

export default InputAddNumber;
