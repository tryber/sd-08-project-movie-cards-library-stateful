import React from 'react';
import PropTypes from 'prop-types';

class Subtitle extends React.Component {
  render() {
    const { handleChange, subtitle } = this.props;
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          data-testid="subtitle-input"
          id="subtitle"
          onChange={ handleChange }
          value={ subtitle }
        />
      </label>
    );
  }
}

Subtitle.propTypes = {
  handleChange: PropTypes.func.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Subtitle;
