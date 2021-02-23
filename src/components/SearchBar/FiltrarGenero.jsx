import React from 'react';
import PropTypes from 'prop-types';

class FiltrarGenero extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="select-input" data-testid="select-input-label">
        Filtrar por gênero
        <select
          name="selectedGenre"
          data-testid="select-input"
          value={ value }
          onChange={ onChange }
        >
          <option value="" data-testid="select-option">Todos</option>
          <option value="action" data-testid="select-option">Ação</option>
          <option value="comedy" data-testid="select-option">Comédia</option>
          <option value="thriller" data-testid="select-option">Suspense</option>
        </select>
      </label>
    );
  }
}

FiltrarGenero.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FiltrarGenero;
