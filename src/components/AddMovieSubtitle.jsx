import React from 'react';
import PropTypes from 'prop-types';

class AddMovieSubtitle extends React.Component {
  render() {
    const { changeState, subtitle } = this.props;
    return (
      <label htmlFor="addmoviesubtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          data-testid="subtitle-input"
          id="addmoviesubtitle"
          value={ subtitle }
          onChange={ (event) => { changeState({ subtitle: event.target.value }); } }
        />
      </label>
    );
  }
}

export default AddMovieSubtitle;

AddMovieSubtitle.propTypes = {
  changeState: PropTypes.func.isRequired,
  subtitle: PropTypes.string.isRequired,
};
