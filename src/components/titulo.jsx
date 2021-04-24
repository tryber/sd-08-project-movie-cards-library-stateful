import React from 'react';

import PropTypes from 'prop-types';

class Titulo extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div>
        <label data-testid="title-input-label" htmlFor="tit">
          Título
          <input
            id="tit"
            name="title"
            type="text"
            value={ value }
            data-testid="title-input"
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}

Titulo.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Titulo;
