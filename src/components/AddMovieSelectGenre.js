import React from 'react';
import PropTypes from 'prop-types';
import AddMovieSelectGenreOptions from './AddMovieSelectGenreOptions';

class AddMovieSelectGenre extends React.Component {
  render() {
    const { onChangeForm, genre } = this.props;
    return (
      <label htmlFor="genre-input-label" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          id="genre-input"
          data-testid="genre-input"
          onChange={ onChangeForm }
          value={ genre }
        >
          <AddMovieSelectGenreOptions />
        </select>
      </label>
    );
  }
}

AddMovieSelectGenre.propTypes = {
  genre: PropTypes.string.isRequired,
  onChangeForm: PropTypes.func,
};

AddMovieSelectGenre.defaultProps = {
  onChangeForm: () => {
    console.log('problema ao passar onChangeForm');
  },
};
export default AddMovieSelectGenre;
