// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.handleChange = this.handleChange.bind(this);
    this.moviesFilter = this.moviesFilter.bind(this);
    this.handleSubmitNewMovie = this.handleSubmitNewMovie.bind(this);
  }

  handleChange(event) {
    const elemento = event.target;
    this.setState({
      [elemento.name]: elemento.type === 'checkbox' ? elemento.checked : elemento.value,
    });
  }

  handleSubmitNewMovie(newMovie) {
    this.setState((state) => ({
      movies: [...state.movies, newMovie],
    }));
  }

  moviesFilter(allmovies) {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (allmovies.filter(
      (movie) => (movie.title.includes(searchText)
          || movie.subtitle.includes(searchText)
          || movie.storyline.includes(searchText)),
    ).filter((movie) => (bookmarkedOnly ? movie.bookmarked : true)))
      .filter((movie) => movie.genre.includes(selectedGenre));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ this.moviesFilter(movies) } />
        <AddMovie onClick={ this.handleSubmitNewMovie } />
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = {
  movies: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};
