import React from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.implementMovie = this.implementMovie.bind(this);
    this.bookmarkedChange = this.bookmarkedChange.bind(this);
    this.genreChange = this.genreChange.bind(this);
    this.checkBookmarked = this.checkBookmarked.bind(this);
    this.checkGenre = this.checkGenre.bind(this);
  }

  bookmarkedChange() {
    const { bookmarkedOnly } = this.state;
    this.setState({ bookmarkedOnly: !bookmarkedOnly });
  }

  genreChange(event, name) {
    const { value } = event.target;
    this.setState({ [name]: value });
  }

  implementMovie(newMovie) {
    this.setState((elem) => ({ movies: [...elem.movies, newMovie] }));
  }

  checkBookmarked(elem) {
    const { bookmarkedOnly } = this.state;
    if (!bookmarkedOnly || (bookmarkedOnly && elem.bookmarked === true)) {
      return elem;
    }
    return false;
  }

  checkGenre(elem) {
    const { selectedGenre } = this.state;
    if ((selectedGenre && elem.genre === selectedGenre) || !selectedGenre) {
      return elem;
    }
    return false;
  }

  findMovies(movies) {
    const { searchText } = this.state;
    return movies.filter(
      (elem) => (elem.title.includes(searchText)
        || elem.storyline.includes(searchText)
        || elem.subtitle.includes(searchText))
        && this.checkBookmarked(elem)
        && this.checkGenre(elem),
    );
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.bookmarkedChange }
          searchText={ searchText }
          onSearchTextChange={ (elem) => this.genreChange(elem, 'searchText') }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ (elem) => this.genreChange(elem, 'selectedGenre') }
        />
        <MovieList movies={ this.findMovies(movies) } />
        <AddMovie onClick={ this.implementMovie } />
      </div>
    );
  }
}
MovieLibrary.propTypes = {
  movies: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
    map: PropTypes.func.isRequired,
  }).isRequired,
};

export default MovieLibrary;
