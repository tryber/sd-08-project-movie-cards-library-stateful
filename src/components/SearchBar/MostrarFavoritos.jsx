import React from 'react';
import PropTypes from 'prop-types';

class MostrarFavoritos extends React.Component {
  render() {
    const { checked, onChange } = this.props;
    return (
      <label htmlFor="checkbox-input" data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input
          type="checkbox"
          data-testid="checkbox-input"
          checked={ checked }
          onChange={ onChange }
        />
      </label>
    );
  }
}

MostrarFavoritos.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default MostrarFavoritos;
