import React from 'react';

import PropTypes from 'prop-types';

class SubTitulo extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div>
        <label data-testid="subtitle-input-label" htmlFor="sub">
          Subtítulo
          <input
            id="sub"
            name="subtitle"
            type="text"
            value={ value }
            data-testid="subtitle-input"
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}

SubTitulo.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SubTitulo;
