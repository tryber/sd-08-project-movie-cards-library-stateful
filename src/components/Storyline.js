import React from 'react';
import PropTypes from 'prop-types';

class Storyline extends React.Component {
  render() {
    const { handleChange, story } = this.props;
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          data-testid="storyline-input"
          id="storyline"
          onChange={ handleChange }
          value={ story }
        />
      </label>
    );
  }
}

Storyline.propTypes = {
  handleChange: PropTypes.func.isRequired,
  story: PropTypes.string.isRequired,
};

export default Storyline;
