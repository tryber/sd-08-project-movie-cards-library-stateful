import React from 'react';
import PropTypes from 'prop-types';

class Genre extends React.Component {
  render() {
    const { handleChange, genre } = this.props;
    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero
        <select
          data-testid="genre-input"
          id="genre"
          onChange={ handleChange }
          value={ genre }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

Genre.propTypes = {
  handleChange: PropTypes.func.isRequired,
  genre: PropTypes.string,
};

Genre.defaultProps = {
  genre: 'action',
};

export default Genre;
