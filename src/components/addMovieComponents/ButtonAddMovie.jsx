import React from 'react';
import propTypes from 'prop-types';

class ButtonAddMovie extends React.Component {
  render() {
    const { onClick } = this.props;
    return (
      <button
        type="submit"
        data-testid="send-button"
        onClick={ onClick }
      >
        Adicionar filme
      </button>
    );
  }
}

export default ButtonAddMovie;

ButtonAddMovie.propTypes = {
  onClick: propTypes.func.isRequired,
};
