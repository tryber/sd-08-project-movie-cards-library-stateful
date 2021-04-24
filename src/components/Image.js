import React from 'react';

import PropTypes from 'prop-types';

class Imagem extends React.Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="imagelabel">
        Imagem
        <input
          type="text"
          value={ value }
          data-testid="image-input"
          onChange={ onChange }
          name="imagePath"
        />
      </label>
    );
  }
}

Imagem.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
export default Imagem;
