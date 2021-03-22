import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: [],
    };
    this.onClick = this.onClick.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
  }

  componentDidMount() {
    this.setInitialMovieState();
  }

  onSearchTextChange({ target }) {
    const { name, value } = target;
    let { movies: moviesProps } = this.props;
    const { movies: moviesStates } = this.state;
    let selectedMovies = [];
    if (value !== '') {
      selectedMovies = moviesStates.filter((movie) => {
        const verifyString = movie.title.includes(value)
        || movie.subtitle.includes(value)
        || movie.storyline.includes(value);
        return verifyString;
      });
    } else selectedMovies = moviesProps;
    moviesProps = selectedMovies;
    this.setState({
      [name]: value,
      movies: selectedMovies,
    });
  }

  onBookmarkedChange({ target }) {
    const { movies: moviesStates } = this.state;
    const { name, checked } = target;
    let { movies: moviesProps } = this.props;
    let selectedMovies = [];
    if (checked) {
      selectedMovies = moviesStates.filter((movie) => movie.bookmarked === true);
    } else {
      selectedMovies = moviesProps;
    }
    moviesProps = selectedMovies;
    this.setState({
      [name]: checked,
      movies: selectedMovies,
    });
    this.setState({
      [name]: checked,
    });
  }

  onSelectedGenreChange({ target }) {
    const { name, value } = target;
    const { movies: moviesStates } = this.state;
    let { movies: moviesProps } = this.props;
    let selectedMovies = [];
    if (value !== '') {
      selectedMovies = moviesStates.filter((movie) => movie.genre === value);
    } else {
      selectedMovies = moviesProps;
    }
    moviesProps = selectedMovies;
    this.setState({
      [name]: value,
      movies: selectedMovies,
    });
  }

  onClick(state) {
    const { movies: moviesStates } = this.state;
    const newMovie = { ...state };
    const newState = moviesStates.slice();
    newState.push(newMovie);
    this.setState({
      movies: newState,
    });
  }

  setInitialMovieState() {
    const { movies } = this.props;
    this.setState({
      movies,
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.onSearchTextChange }
          onBookmarkedChange={ this.onBookmarkedChange }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <AddMovie onClick={ this.onClick } />
        <MovieList movies={ movies } />
      </>
    );
  }
}

MovieLibrary.propTypes = {
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
      bookmarked: PropTypes.bool.isRequired,
      genre: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default MovieLibrary;
