// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class AddMovieSubmit extends React.Component {
  render() {
    const { onClick } = this.props;
    return (
      <button
        type="button"
        data-testid="send-button"
        onClick={ onClick }
      >
        Adicionar filme
      </button>
    );
  }
}

export default AddMovieSubmit;

AddMovieSubmit.propTypes = {
  onClick: PropTypes.func.isRequired,
};
