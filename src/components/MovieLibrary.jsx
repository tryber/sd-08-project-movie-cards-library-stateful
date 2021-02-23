// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super();

    this.searchMovie = this.searchMovie.bind(this);
    this.favoriteMarked = this.favoriteMarked.bind(this);
    this.searchByGenre = this.searchByGenre.bind(this);
    this.movieAdd = this.movieAdd.bind(this);

    this.state = ({
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    });
  }

  searchMovie({ target: { value } }) {
    const { movies } = this.state;
    this.setState({
      searchText: value,
      movies: movies.filter((mov) => [mov.title, mov.subtitle, mov.storyline]
        .some((movie) => movie.includes(value))),
    });
  }

  favoriteMarked({ target: { checked } }) {
    const { movies } = this.state;
    this.setState({
      bookmarkedOnly: checked,
      movies: movies.filter((mov) => mov.bookmarked === checked),
    });
  }

  searchByGenre({ target: { value } }) {
    const { movies } = this.state;
    this.setState({
      selectedGenre: value,
      movies: movies.filter((mov) => mov.genre === value),
    });
  }

  movieAdd(mov) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, mov],
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchMovie={ this.searchMovie }
          onBookmarkedChange={ this.favoriteMarked }
          onSelectedGenreChange={ this.searchByGenre }
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.movieAdd } />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieLibrary;
