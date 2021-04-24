import React from 'react';
import PropTypes from 'prop-types';

class InputNumber extends React.Component {
  render() {
    const { rating, func } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="rating">
        Avaliação
        <input
          type="number"
          name="rating"
          data-testid="rating-input"
          value={ rating }
          onChange={ func }
        />
      </label>
    );
  }
}

InputNumber.propTypes = {
  rating: PropTypes.number.isRequired,
  func: PropTypes.func.isRequired,
};

export default InputNumber;
