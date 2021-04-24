import React from 'react';
import PropTypes from 'prop-types';

class CheckBox extends React.Component {
  render() {
    const { checked, func } = this.props;
    return (
      <label data-testid="checkbox-input-label" htmlFor="bookmarkedOnly">
        Mostrar somente favoritos
        <input
          name="bookmarkedOnly"
          type="checkbox"
          checked={ checked }
          onChange={ func }
          data-testid="checkbox-input"
        />
      </label>
    );
  }
}

CheckBox.propTypes = {
  checked: PropTypes.bool.isRequired,
  func: PropTypes.func.isRequired,
};

export default CheckBox;
