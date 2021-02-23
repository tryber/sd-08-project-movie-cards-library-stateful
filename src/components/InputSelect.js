import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputSelect extends Component {
  render() {
    const { func, genre } = this.props;
    return (
      <label data-testid="genre-input-label" htmlFor="select">
        Gênero
        <select
          value={ genre }
          data-testid="genre-input"
          id="select"
          onChange={ func }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">
            Suspense
          </option>
        </select>
      </label>
    );
  }
}

InputSelect.propTypes = {
  func: PropTypes.func.isRequired,
  genre: PropTypes.string.isRequired,
};
