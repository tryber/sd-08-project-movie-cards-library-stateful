import React from 'react';
import PropTypes from 'prop-types';

class SelectInputLabelGenreFilter extends React.Component {
  render() {
    const { labelText, name, value, onChange, dtId, dtLabelId, dtOptionId } = this.props;

    return (
      <label htmlFor={ dtId } data-testid={ dtLabelId }>
        { labelText }
        <select
          name={ name }
          value={ value }
          onChange={ onChange }
          data-testid={ dtId }
        >
          <option data-testid={ dtOptionId } value="">Todos</option>
          <option data-testid={ dtOptionId } value="action">Ação</option>
          <option data-testid={ dtOptionId } value="comedy">Comédia</option>
          <option data-testid={ dtOptionId } value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

SelectInputLabelGenreFilter.propTypes = {
  labelText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  dtId: PropTypes.string.isRequired,
  dtLabelId: PropTypes.string.isRequired,
  dtOptionId: PropTypes.string.isRequired,
};

export default SelectInputLabelGenreFilter;
