import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

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
    this.handleBookmarkedChange = this.handleBookmarkedChange.bind(this);
    this.handleMoviesChange = this.handleMoviesChange.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleBookmarkedChange(event) {
    this.setState({
      [event.target.name]: event.target.checked,
    });
  }

  handleMoviesChange(movie) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, movie],
    });
  }

  filterMovies(movies) {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return movies
      .filter((movie) => {
        const titleLowerCase = movie.title.toLowerCase();
        const subtitleLowerCase = movie.subtitle.toLowerCase();
        const storylineLowerCase = movie.storyline.toLowerCase();
        const searchTextLowerCase = searchText.toLowerCase();

        return (titleLowerCase.includes(searchTextLowerCase)
          || subtitleLowerCase.includes(searchTextLowerCase)
          || storylineLowerCase.includes(searchTextLowerCase));
      })
      .filter((movie) => !bookmarkedOnly || movie.bookmarked)
      .filter((movie) => selectedGenre === '' || selectedGenre === movie.genre);
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    const filtredMovies = this.filterMovies(movies);
    return (
      <section>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <AddMovie onClick={ this.handleMoviesChange } />
        <MovieList movies={ filtredMovies } />
      </section>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
  })).isRequired,
};

export default MovieLibrary;
