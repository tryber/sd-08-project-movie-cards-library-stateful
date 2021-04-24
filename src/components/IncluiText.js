import React from 'react';

import PropTypes from 'prop-types';

class Texto extends React.Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <label data-testid="text-input-label" htmlFor="textinputlabel">
        Inclui o texto
        <input
          type="text"
          value={ value }
          data-testid="text-input"
          onChange={ onChange }
          name="searchText"
        />
      </label>
    );
  }
}
Texto.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
export default Texto;
