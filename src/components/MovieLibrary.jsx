// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  handleChange({ target }) {
    const { name, type } = target;
    const value = type !== 'checkbox' ? target.value : target.checked;

    this.setState({
      [name]: value,
    });
  }

  addMovie(object) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, object],
    });
  }

  searchBarComponent() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <SearchBar
        searchText={ searchText }
        onSearchTextChange={ this.handleChange }
        bookmarkedOnly={ bookmarkedOnly }
        onBookmarkedChange={ this.handleChange }
        selectedGenre={ selectedGenre }
        onSelectedGenreChange={ this.handleChange }
      />);
  }

  filterMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let movieList = movies;
    if (bookmarkedOnly === true) {
      movieList = movieList.filter((m) => m.bookmarked === true);
    }
    if (selectedGenre !== '') {
      movieList = movieList.filter((m) => m.genre === selectedGenre);
    }
    if (searchText !== '') {
      movieList = movieList.filter((m) => m.title.toLowerCase()
        .includes(searchText.toLowerCase())
        || m.subtitle.toLowerCase().includes(searchText.toLowerCase())
        || m.storyline.toLowerCase().includes(searchText.toLowerCase()));
    }
    return (
      <MovieList movies={ movieList } />
    );
  }

  render() {
    return (
      <div>
        { this.searchBarComponent() }
        { this.filterMovies() }
        <AddMovie onClick={ this.addMovie } />
      </div>
    );
  }
}
MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf.isRequired,
};
export default MovieLibrary;
