import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ButtonSubmitMovie extends Component {
  render() {
    const { handleReset } = this.props;
    return (
      <button
        data-testid="send-button"
        type="submit"
        onClick={ handleReset }
      >
        Adicionar filme
      </button>
    );
  }
}

ButtonSubmitMovie.propTypes = {
  handleReset: PropTypes.func.isRequired,
};

export default ButtonSubmitMovie;
