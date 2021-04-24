import React from 'react';
import PropTypes from 'prop-types';

class AddTitle extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          id="title-input"
          name="title"
          type="text"
          value={ value }
          data-testid="title-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

AddTitle.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

AddTitle.defaultProps = {
  value: '',
};

export default AddTitle;
