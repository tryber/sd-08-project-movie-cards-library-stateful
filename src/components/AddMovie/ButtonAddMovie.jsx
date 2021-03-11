import React from 'react';
import PropTypes from 'prop-types';

class ButtonAddMovie extends React.Component {
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

ButtonAddMovie.propTypes = {
  handleReset: PropTypes.func.isRequired,
};

export default ButtonAddMovie;
