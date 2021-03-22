import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  showMovies() {
    const { movies } = this.props;
    const moviesList = movies.map(
      (movie) => <MovieCard key={ movie.title } movie={ movie } />,
    );
    return moviesList;
  }

  render() {
    // const { movies } = this.props;
    return (
      <div data-testid="movie-list" className="movie-list">
        {this.showMovies()}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      storyline: PropTypes.string.isRequired,
      rating: PropTypes.oneOfType([
        PropTypes.number.isRequired,
        PropTypes.string.isRequired,
      ]),
      imagePath: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default MovieList;
