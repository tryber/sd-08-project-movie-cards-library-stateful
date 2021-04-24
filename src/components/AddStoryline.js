import React from 'react';
import PropTypes from 'prop-types';

class AddStoryline extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          id="storyline-input"
          name="storyline"
          value={ value }
          data-testid="storyline-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

AddStoryline.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

AddStoryline.defaultProps = {
  value: '',
};

export default AddStoryline;
