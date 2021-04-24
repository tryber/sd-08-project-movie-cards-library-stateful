import React from 'react';
import PropTypes from 'prop-types';

class InputTextArea extends React.Component {
  render() {
    const { storyline, func } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline">
        Sinopse
        <input
          type="text"
          name="storyline"
          data-testid="storyline-input"
          value={ storyline }
          onChange={ func }
        />
      </label>
    );
  }
}

InputTextArea.propTypes = {
  storyline: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};

export default InputTextArea;
