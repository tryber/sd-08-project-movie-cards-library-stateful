import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.addNewMovie = this.addNewMovie.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
    const { movies } = props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  onSearchTextChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  onBookmarkedChange(event) {
    const { name, checked } = event.target;
    this.setState({ [name]: checked });
  }

  onSelectedGenreChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  filterMovies(movies) {
    const { bookmarkedOnly, selectedGenre, searchText } = this.state;
    return movies
      .filter((movie) => (bookmarkedOnly ? movie.bookmarked === true : true))
      .filter((movie) => movie.genre.includes(selectedGenre))
      .filter(
        (movie) => movie.title
          .toLowerCase()
          .includes(searchText.toLowerCase())
          || movie.subtitle
            .toLowerCase()
            .includes(searchText.toLowerCase())
          || movie.storyline
            .toLowerCase()
            .includes(searchText.toLowerCase()),
      );
  }

  addNewMovie(movie) {
    this.setState((oldState) => ({ movies: [...oldState.movies, movie] }));
  }

  render() {
    const { searchText, selectedGenre, bookmarkedOnly } = this.state;
    const { movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.onSearchTextChange }
          onSelectedGenreChange={ this.onSelectedGenreChange }
          onBookmarkedChange={ this.onBookmarkedChange }
        />
        <MovieList movies={ this.filterMovies(movies) } />
        <AddMovie onClick={ this.addNewMovie } />

      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.shape({
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  imagePath: PropTypes.string.isRequired,
  map: PropTypes.func.isRequired,
}).isRequired };

export default MovieLibrary;
