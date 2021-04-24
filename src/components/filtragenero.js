import React from 'react';

import PropTypes from 'prop-types';

class FiltraGenero extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div>
        <label data-testid="select-input-label" htmlFor="g">
          <select id="g" value={ value } onChange={ onChange } data-testid="select-input">
            Filtrar por gênero
            <option value="" data-testid="select-option">Todos</option>
            <option value="action" data-testid="select-option">Ação</option>
            <option value="comedy" data-testid="select-option">Comédia</option>
            <option value="thriller" data-testid="select-option">Suspense</option>
          </select>
        </label>
      </div>
    );
  }
}

FiltraGenero.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FiltraGenero;
