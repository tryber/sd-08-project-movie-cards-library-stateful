import React from 'react';
import PropTypes from 'prop-types';

class AddTituloMovie extends React.Component {
  render() {
    const {
      value,
      handleChange,
    } = this.props;
    return (
      <label htmlFor="text-input" data-testid="title-input-label">
        Título
        <input
          name="title"
          data-testid="title-input"
          type="text"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

AddTituloMovie.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default AddTituloMovie;
