import React from 'react';
import PropTypes from 'prop-types';

class InputSubititle extends React.Component {
  render() {
    const { subtitle, func } = this.props;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          data-testid="subtitle-input"
          value={ subtitle }
          onChange={ func }
        />
      </label>
    );
  }
}

InputSubititle.propTypes = {
  subtitle: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};

export default InputSubititle;
