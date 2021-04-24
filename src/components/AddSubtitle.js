import React from 'react';
import PropTypes from 'prop-types';

class AddSubtitle extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          id="subtitle-input"
          name="subtitle"
          type="text"
          value={ value }
          data-testid="subtitle-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

AddSubtitle.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

AddSubtitle.defaultProps = {
  value: '',
};

export default AddSubtitle;
