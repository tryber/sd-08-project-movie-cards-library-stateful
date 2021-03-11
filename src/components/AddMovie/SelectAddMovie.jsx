import React from 'react';
import Proptypes from 'prop-types';

class SelectAddMovie extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label data-testid="genre-input-label" htmlFor="genre-input">
        Gênero
        <select
          data-testid="genre-input"
          id="genre-input"
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

SelectAddMovie.propTypes = {
  value: Proptypes.string.isRequired,
  handleChange: Proptypes.func.isRequired,
};

export default SelectAddMovie;
