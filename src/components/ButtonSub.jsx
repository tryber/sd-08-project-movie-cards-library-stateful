import React from 'react';
import PropTypes from 'prop-types';

class ButtonSub extends React.Component {
  render() {
    const { buttonSub } = this.props;
    return (
      <section>
        <button
          type="submit"
          data-testid="send-button"
          onClick={ buttonSub }
        >
          Adicionar filme
        </button>
      </section>
    );
  }
}

ButtonSub.propTypes = {
  buttonSub: PropTypes.func.isRequired,
};

export default ButtonSub;
