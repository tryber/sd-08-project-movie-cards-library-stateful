import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };

    this.handleChange = this.handleChange.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
    this.addNewMovie = this.addNewMovie.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.type === 'checkbox' ? target.checked : target.value,
    });
  }

  addNewMovie(movieObject) {
    this.setState((currentState) => ({
      movies: [...currentState.movies, movieObject],
    }));
  }

  filterMovies(movies) {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    let moviesToRender = bookmarkedOnly
      ? movies.filter((movie) => movie.bookmarked)
      : movies;
    moviesToRender = moviesToRender
      .filter((movie) => movie.genre.includes(selectedGenre))
      .filter((movie) => movie.title.toLowerCase().includes(searchText)
        || movie.subtitle.toLowerCase().includes(searchText)
        || movie.storyline.toLowerCase().includes(searchText));

    return moviesToRender;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    const moviesToRender = this.filterMovies(movies);
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.handleChange }
          onBookmarkedChange={ this.handleChange }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ moviesToRender } />
        <AddMovie onClick={ this.addNewMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
