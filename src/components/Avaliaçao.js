import React from 'react';

import PropTypes from 'prop-types';

class Avaliacao extends React.Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="ratinglabel">
        Avaliação
        <input
          type="number"
          value={ value }
          data-testid="rating-input"
          onChange={ onChange }
          name="rating"
        />
      </label>
    );
  }
}

Avaliacao.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};
export default Avaliacao;
