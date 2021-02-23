import React from 'react';
import PropTypes from 'prop-types';

class AddMovieTitle extends React.Component {
  render() {
    const { changeState, title } = this.props;
    return (
      <label htmlFor="addmovietitle" data-testid="title-input-label">
        Título
        <input
          type="text"
          data-testid="title-input"
          id="addmovietitle"
          value={ title }
          onChange={ (event) => { changeState({ title: event.target.value }); } }
        />
      </label>
    );
  }
}

export default AddMovieTitle;

AddMovieTitle.propTypes = {
  changeState: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
