import React from 'react';
import PropTypes from 'prop-types';

class Sinopse extends React.Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="sinopselabel">
        Sinopse
        <input
          type="textarea"
          value={ value }
          data-testid="storyline-input"
          onChange={ onChange }
          name="storyline"
        />
      </label>
    );
  }
}

Sinopse.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
export default Sinopse;
