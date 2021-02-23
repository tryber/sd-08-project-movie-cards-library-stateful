import React from 'react';
import PropTypes from 'prop-types';

class AddMoviePlot extends React.Component {
  render() {
    const { changeState, storyline } = this.props;
    return (
      <label htmlFor="addmovieplot" data-testid="storyline-input-label">
        Sinopse
        <input
          type="text"
          data-testid="storyline-input"
          id="addmovieplot"
          value={ storyline }
          onChange={ (event) => { changeState({ storyline: event.target.value }); } }
        />
      </label>
    );
  }
}

export default AddMoviePlot;

AddMoviePlot.propTypes = {
  changeState: PropTypes.func.isRequired,
  storyline: PropTypes.string.isRequired,
};
