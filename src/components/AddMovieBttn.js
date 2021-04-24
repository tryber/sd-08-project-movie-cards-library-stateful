import React from 'react';
import PropTypes from 'prop-types';

class AddMovieBttn extends React.Component {
  render() {
    const { onClick, handleClick } = this.props;
    return (
      <button
        type="submit"
        data-testid="send-button"
        onClick={ (event) => {
          event.preventDefault();
          handleClick(onClick);
        } }
      >
        Adicionar filme
      </button>
    );
  }
}

AddMovieBttn.propTypes = {
  onClick: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default AddMovieBttn;
