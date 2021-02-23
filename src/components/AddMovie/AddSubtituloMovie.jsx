import React from 'react';
import PropTypes from 'prop-types';

class AddSubtituloMovie extends React.Component {
  render() {
    const {
      value,
      handleChange,
    } = this.props;
    return (
      <label htmlFor="text-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          data-testid="subtitle-input"
          type="text"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

AddSubtituloMovie.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default AddSubtituloMovie;
