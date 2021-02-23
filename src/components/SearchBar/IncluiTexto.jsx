import React from 'react';
import PropTypes from 'prop-types';

class IncluiTexto extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="text-input" data-testid="text-input-label">
        Inclui o texto:
        <input
          name="searchText"
          data-testid="text-input"
          type="text"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

IncluiTexto.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default IncluiTexto;
