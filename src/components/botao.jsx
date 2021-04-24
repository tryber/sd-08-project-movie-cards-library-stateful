import React from 'react';

import PropTypes from 'prop-types';

class Botao extends React.Component {
  render() {
    const { onClick } = this.props;
    return (
      <div>
        <button
          type="button"
          onClick={ onClick }
          data-testid="send-button"
        >
          Adicionar filme
        </button>
      </div>
    );
  }
}

Botao.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Botao;
