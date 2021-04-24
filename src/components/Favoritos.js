import React from 'react';

import PropTypes from 'prop-types';

class Favoritos extends React.Component {
  render() {
    const { onChange, checked } = this.props;
    return (
      <label data-testid="checkbox-input-label" htmlFor="checkboxlabel">
        Mostrar somente favoritos
        <input
          type="checkbox"
          checked={ checked }
          onChange={ onChange }
          data-testid="checkbox-input"
          name="bookmarkedOnly"
        />
      </label>
    );
  }
}

Favoritos.propTypes = {
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
};

export default Favoritos;
