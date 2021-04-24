import React from 'react';
import PropType from 'prop-types';

class Title extends React.Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <label data-testid="title-input-label" htmlFor="titlelabel">
        Título
        <input
          type="text"
          value={ value }
          name="title"
          data-testid="title-input"
          onChange={ onChange }
        />
      </label>
    );
  }
}

Title.propTypes = {
  onChange: PropType.func.isRequired,
  value: PropType.string.isRequired,
};

export default Title;
