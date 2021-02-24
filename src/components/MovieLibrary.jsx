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
    this.addMovie = this.addMovie.bind(this);
    this.onChangeFilter = this.onChangeFilter.bind(this);
  }

  onChangeFilter(e) {
    const { searchText } = this.state;
    this.setState({
      [e.target.name]: e.target.type === 'checkbox'
        ? e.target.checked : e.target.value,
      // bookmarkedOnly: e.target.checked,
    }, () => this.onSearchTextChange(searchText));
  }

  onSearchTextChange(text) {
    const { movies } = this.state;
    const moviesFiltered = movies.filter((movie) => movie.title === text);
    console.log(moviesFiltered);
  }

  addMovie(newMovie) {
    const { movies } = this.state;
    this.setState({ movies: movies.concat(newMovie) });
  }

  render() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <AddMovie onClick={ this.addMovie } />
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onChangeFilter }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onChangeFilter }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onChangeFilter }
        />
        <MovieList
          movies={ movies }
        />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf.isRequired,
};

export default MovieLibrary;
