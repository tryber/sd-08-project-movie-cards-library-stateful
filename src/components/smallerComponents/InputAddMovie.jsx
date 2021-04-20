import React from 'react';
import PropTypes from 'prop-types';

class InputAddMovie extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label
        htmlFor="input-text"
        data-testid="title-input-label"
      >
        Título
        <input
          name="title"
          type="text"
          id="input-text"
          data-testid="title-input"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

InputAddMovie.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
};

InputAddMovie.defaultProps = {
  value: '',
  handleChange: () => {},
};

export default InputAddMovie;
