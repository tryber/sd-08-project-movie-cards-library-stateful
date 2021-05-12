import React from 'react';
import PropTypes from 'prop-types';

class InputTitle extends React.Component {
  render() {
    const { title, handleChange } = this.props;
    return (
      <label
        data-testid="title-input-label"
        htmlFor="title-input"
      >
        Título
        <input
          data-testid="title-input"
          id="title-input"
          name="title"
          onChange={ handleChange }
          type="text"
          value={ title }
        />
      </label>
    );
  }
}

InputTitle.propTypes = {
  title: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputTitle;
