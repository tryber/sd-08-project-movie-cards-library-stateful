import React from 'react';
import PropTypes from 'prop-types';

class CheckBoxInputLabel extends React.Component {
  render() {
    const { checked, onChange, dataTesteId, dataLabelTesteId } = this.props;

    return (
      <label htmlFor={ dataTesteId } data-testid={ dataLabelTesteId }>
        Mostrar somente favoritos
        <input
          type="checkbox"
          name={ dataTesteId }
          checked={ checked }
          onChange={ onChange }
          data-testid={ dataTesteId }
        />
      </label>
    );
  }
}

CheckBoxInputLabel.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  dataTesteId: PropTypes.string.isRequired,
  dataLabelTesteId: PropTypes.string.isRequired,
};

export default CheckBoxInputLabel;
