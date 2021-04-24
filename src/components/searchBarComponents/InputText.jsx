import React from 'react';
import Proptypes from 'prop-types';

class InputText extends React.Component {
  render() {
    const d = 'text-input';
    const { value, change } = this.props;
    return (
      <label htmlFor="input" data-testid="text-input-label">
        Inclui o texto:
        <input value={ value } onChange={ change } type="text" data-testid={ d } />
      </label>
    );
  }
}

export default InputText;

InputText.propTypes = {
  value: Proptypes.string.isRequired,
  change: Proptypes.func.isRequired,
};
