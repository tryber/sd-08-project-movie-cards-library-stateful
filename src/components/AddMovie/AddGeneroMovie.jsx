import React from 'react';
import PropTypes from 'prop-types';

class AddGeneroMovie extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="select-input" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          data-testid="genre-input"
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

AddGeneroMovie.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default AddGeneroMovie;
