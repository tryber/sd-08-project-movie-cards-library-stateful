import React from 'react';
import PropTypes from 'prop-types';

class Subtitulo extends React.Component {
  render() {
    const { onChange, value } = this.props;
    return (

      <label data-testid="subtitle-input-label" htmlFor="subtitlelabel">
        Subtítulo
        <input
          type="text"
          value={ value }
          data-testid="subtitle-input"
          onChange={ onChange }
          name="subtitle"
        />
      </label>
    );
  }
}

Subtitulo.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
export default Subtitulo;
