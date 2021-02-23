import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { handleChange, titleValue } = this.props;
    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          type="text"
          data-testid="title-input"
          id="title"
          onChange={ handleChange }
          value={ titleValue }
        />
      </label>
    );
  }
}

Title.propTypes = {
  handleChange: PropTypes.func.isRequired,
  titleValue: PropTypes.string.isRequired,
};

export default Title;
