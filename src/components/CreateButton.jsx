// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CreateButton extends Component {
  render() {
    const { onClick, dataTestid } = this.props;
    return (
      <button
        type="button"
        data-testid={ dataTestid }
        onClick={ onClick }
      >
        Adicionar filme
      </button>
    );
  }
}
// <button type="button" data-testid="send-button" onClick={ this.handleForm }>Adicionar filme</button>

CreateButton.propTypes = {
  dataTestid: PropTypes.string,
  onClick: PropTypes.func,

};

CreateButton.defaultProps = {
  dataTestid: '',
  onClick: PropTypes.func,
};

export default CreateButton;
