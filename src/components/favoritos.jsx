import React from 'react';

import PropTypes from 'prop-types';

class Favoritos extends React.Component {
  render() {
    const { onChange, checked } = this.props;
    return (
      <div>
        <label data-testid="checkbox-input-label" htmlFor="checkbox">
          Mostrar somente favoritos
          <input
            id="checkbox"
            data-testid="checkbox-input"
            type="checkbox"
            onChange={ onChange }
            checked={ checked }
          />
        </label>
      </div>
    );
  }
}

Favoritos.propTypes = {
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
};

export default Favoritos;
