import React from 'react';

import PropTypes from 'prop-types';

class Sinopse extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div>
        <label data-testid="storyline-input-label" htmlFor="sinop">
          Sinopse
          <input
            id="sinop"
            name="storyline"
            type="text"
            value={ value }
            data-testid="storyline-input"
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}

Sinopse.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Sinopse;
