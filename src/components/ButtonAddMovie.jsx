import React from 'react';
import PropTypes from 'prop-types';

class ButtonAddMovie extends React.Component {
  render() {
    const { func } = this.props;
    return (
      <button
        type="button"
        onClick={ func }
        data-testid="send-button"
      >
        Adicionar filme
      </button>
    );
  }
}

ButtonAddMovie.propTypes = {
  func: PropTypes.func.isRequired,
};

export default ButtonAddMovie;
