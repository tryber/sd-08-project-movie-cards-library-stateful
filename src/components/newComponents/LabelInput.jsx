import React from 'react';
import propTypes from 'prop-types';

class LabelInput extends React.Component {
  render() {
    const { text, name, data } = this.props;
    return (
      <label data-testid={ data } htmlFor={ name }>
        {text}
      </label>
    );
  }
}

LabelInput.propTypes = {
  text: propTypes.string.isRequired,
  data: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
};

export default LabelInput;
