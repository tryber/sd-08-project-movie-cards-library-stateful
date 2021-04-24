import React from 'react';
import PropTypes from 'prop-types';

class SubTitle extends React.Component {
  render() {
    const { subtitle, handleChange } = this.props;
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo:
        <input
          id="subtitle-input"
          type="text"
          name="subtitle"
          onChange={ handleChange }
          value={ subtitle }
          data-testid="subtitle-input"
        />
      </label>
    );
  }
}

SubTitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SubTitle;
