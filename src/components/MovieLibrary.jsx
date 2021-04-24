import React from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
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
    this.addingMovie = this.addingMovie.bind(this);
    this.filteringMovies = this.filteringMovies.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.type === 'checkbox' ? target.checked : target.value,
    });
  }

  addingMovie(obj) {
    this.setState((cur) => ({
      movies: [...cur.movies, obj],
    }));
  }

  filteringMovies(movies) {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    let renderMovies = bookmarkedOnly ? movies
      .filter(((movie) => movie.bookmarked)) : movies;
    renderMovies = renderMovies
      .filter((movie) => movie.genre.includes(selectedGenre))
      .filter((movie) => movie.title.includes(searchText)
      || movie.subtitle.includes(searchText)
      || movie.storyline.includes(searchText));

    return renderMovies;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    const renderMovies = this.filteringMovies(movies);
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
        <MovieList movies={ renderMovies } />
        <AddMovie onClick={ this.addingMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
