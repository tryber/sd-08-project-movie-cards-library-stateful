import React from 'react';
import PropTypes from 'prop-types';

import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor(pros) {
    super(pros);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      // bookmarkedOnly: false,
      // selectedGenre: '',
      movies,
    };
    this.filterMovies = this.filterMovies.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  filterMovies({ target }) {
    const { searchText, movies } = this.state;
    const { value } = target;

    this.setState({ searchText: value }, () => {
      const filteredMovies = movies.filter(
        (movie) => movie.title.includes(searchText)
        || movie.subtitle.includes(value)
            || movie.storyline.includes(value),
      );
      this.setState({ movies: filteredMovies });
    });
  }

  addMovie(addMovie) {
    const { movies } = this.state;
    this.setState(() => ({
      movies: [...movies, addMovie],
    }));
  }

  render() {
    const { searchText, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.filterMovies }
        />
        <MovieList
          movies={ movies }
        />
        <AddMovie
          onClick={ this.addMovie }
        />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.instanceOf(Array).isRequired,
};

export default MovieLibrary;
