import React from 'react';
import PropTypes from 'prop-types';

const StoryLine = (props) => {
  const { onChange, value } = props;
  return (
    <label htmlFor="storyline" data-testid="storyline-input-label">
      Sinopse
      <textarea
        name="storyline"
        cols="30"
        rows="10"
        data-testid="storyline-input"
        onChange={ onChange }
        value={ value }
      />
    </label>
  );
};

StoryLine.defaultProps = {
  onChange: null,
  value: '',
};

StoryLine.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default StoryLine;
