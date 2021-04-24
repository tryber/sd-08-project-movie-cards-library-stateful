import React from 'react';

import PropTypes from 'prop-types';

class Image extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div>
        <label data-testid="image-input-label" htmlFor="img">
          Imagem
          <input
            id="img"
            name="imagePath"
            type="text"
            value={ value }
            data-testid="image-input"
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}

Image.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Image;
