import React from 'react';

import PropTypes from 'prop-types';

class Avaliacao extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div>
        <label data-testid="rating-input-label" htmlFor="ava">
          Avaliação
          <input
            id="ava"
            name="rating"
            type="number"
            value={ value }
            data-testid="rating-input"
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}

Avaliacao.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Avaliacao;
