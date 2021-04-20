import React from 'react';
import PropTypes from 'prop-types';

class InputAddSelect extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label htmlFor="input-select" data-testid="genre-input-label">
        Gênero
        <select
          data-testid="genre-input"
          id="input-select"
          name="genre"
          value={ value }
          onChange={ handleChange }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

InputAddSelect.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
};

InputAddSelect.defaultProps = {
  value: '',
  handleChange: () => {},
};

export default InputAddSelect;
