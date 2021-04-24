// implement MovieLibrary component here
import React from 'react';
import PropTypes, { objectOf } from 'prop-types';

import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.PureComponent {
  constructor(props) {
    super();

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
  }

  onSearchTextChange(event) {
    const { movies } = this.state;
    this.setState({
      searchText: event.target.value,
      movies: movies
        .filter((movie) => [movie.title, movie.subtitle, movie.storyline]
          .some((item) => item.includes(event.target.value))),
    });
  }

  onBookmarkedChange(event) {
    // const { bookmarkedOnly } = this.state;
    const { movies } = this.state;
    this.setState({
      bookmarkedOnly: event.target.checked,
      movies: movies.filter((movie) => movie.bookmarked === event.target.checked),
    });
  }

  onSelectedGenreChange(event) {
    const { movies } = this.state;
    this.setState({
      selectedGenre: event.target.value,
      movies: movies
        .filter((movie) => movie.genre === event.target.value),
    });
  }

  render() {
    // const { movies } = this.props;
    const {
      searchText, movies, bookmarkedOnly, selectedGenre,
    } = this.state;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          bookmarkedOnly={bookmarkedOnly}
          selectedGenre={selectedGenre}
          onSearchTextChange={this.onSearchTextChange}
          onBookmarkedChange={this.onBookmarkedChange}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList
          movies={movies}
        />
        <AddMovie onClick={this.onClick} />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(objectOf).isRequired,
};

export default MovieLibrary;
