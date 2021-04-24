import React from 'react';
import PropTypes from 'prop-types';

class AddMovieSendButton extends React.Component {
  render() {
    const { handleSendButton } = this.props;
    return (
      <button type="submit" data-testid="send-button" onClick={ handleSendButton }>
        Adicionar filme
      </button>
    );
  }
}

AddMovieSendButton.propTypes = { handleSendButton: PropTypes.func.isRequired };

export default AddMovieSendButton;
