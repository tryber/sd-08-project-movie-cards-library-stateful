import React from 'react';

import PropTypes from 'prop-types';

class IncluiTexto extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div>
        <label data-testid="text-input-label" htmlFor="incluiTexto">
          Inclui o texto:
          <input
            type="text"
            id="incluiTexto"
            value={ value }
            onChange={ onChange }
            data-testid="text-input"
          />
        </label>
      </div>
    );
  }
}

IncluiTexto.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default IncluiTexto;
